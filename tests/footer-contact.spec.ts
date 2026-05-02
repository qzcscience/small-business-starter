import { expect, test } from '@playwright/test';

const footerTopLevelLinks = [
  'Products',
  'Industry Solutions',
  'Our Customers',
  'Resources',
  'News',
  'About Us',
];

const newsCategoryLinks = [
  'Company',
  'Customer Success',
  'Trade Shows',
  'Industry',
];

const addressLines = [
  'Street: No.8 Wenqu Road',
  'Location: Hefei, Anhui, China',
  'Zip: 230088',
];

test.describe('Footer and contact copy', () => {
  for (const viewport of [
    { width: 390, height: 844 },
    { width: 1440, height: 1100 },
  ]) {
    test(`footer renders on ${viewport.width}x${viewport.height} without overflow`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto('/');

      const footer = page.locator('footer');

      for (const label of footerTopLevelLinks) {
        await expect(footer.getByRole('link', { name: label, exact: true })).toBeVisible();
      }

      for (const label of newsCategoryLinks) {
        await expect(footer.getByRole('link', { name: label, exact: true })).toBeVisible();
      }

      for (const line of addressLines) {
        await expect(footer.getByText(line)).toBeVisible();
      }

      const contactLink = footer.getByRole('link', { name: 'Contact', exact: true });
      await expect(contactLink).toHaveCount(1);
      await expect(contactLink).toHaveAttribute('href', '/contact');

      await expect(footer.getByRole('heading', { name: 'WeChat', exact: true })).toBeVisible();
      await expect(footer.getByAltText('WeChat QR code')).toBeVisible();

      if (viewport.width === 1440) {
        const rowCounts = await footer.locator('section').evaluateAll((sections) => {
          const counts = new Map<number, number>();

          for (const section of sections) {
            const top = Math.round(section.getBoundingClientRect().top);
            counts.set(top, (counts.get(top) ?? 0) + 1);
          }

          return Array.from(counts.values()).sort((a, b) => a - b);
        });

        expect(rowCounts).toEqual([3, 3]);
      }

      const weChatPresentation = await footer.getByAltText('WeChat QR code').evaluate((image) => {
        const parent = image.parentElement;
        const imageStyle = window.getComputedStyle(image);
        const parentStyle = parent ? window.getComputedStyle(parent) : null;

        return {
          image: {
            backgroundColor: imageStyle.backgroundColor,
            borderTopWidth: imageStyle.borderTopWidth,
            paddingTop: imageStyle.paddingTop,
          },
          parent: parentStyle && {
            backgroundColor: parentStyle.backgroundColor,
            borderTopWidth: parentStyle.borderTopWidth,
            paddingTop: parentStyle.paddingTop,
          },
        };
      });

      expect(weChatPresentation).toEqual({
        image: {
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderTopWidth: '0px',
          paddingTop: '0px',
        },
        parent: {
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderTopWidth: '0px',
          paddingTop: '0px',
        },
      });

      const overflow = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));

      expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth + 1);
    });
  }

  test('contact page shows the updated address', async ({ page }) => {
    await page.goto('/contact');

    const visitUsLink = page.locator('aside a[href*="maps"]');

    for (const line of addressLines) {
      await expect(visitUsLink).toContainText(line);
    }
  });
});
