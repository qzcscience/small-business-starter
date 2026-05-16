import { expect, test } from '@playwright/test';

const sfj231CertificationDownloads = [
  {
    label: 'SFJ 231 CE Certificate',
    fileName: 'SFJ-231-CE-Certificate.pdf',
    href: '/downloads/products/SFJ-231/SFJ-231-CE-Certificate.pdf',
  },
  {
    label: 'SFJ 231 NRTL Certificate',
    fileName: 'SFJ-231-NRTL-Certificate.pdf',
    href: '/downloads/products/SFJ-231/SFJ-231-NRTL-Certificate.pdf',
  },
];

test.describe('SFJ-231 product downloads', () => {
  test('renders product certification downloads', async ({ page }) => {
    await page.goto('/products/helium-leak-detector-SFJ-231');
    await page
      .getByRole('navigation', { name: 'Product detail sections' })
      .getByRole('link', { name: 'Downloads' })
      .click();

    for (const download of sfj231CertificationDownloads) {
      await expect(page.getByText(download.label, { exact: true })).toBeVisible();
      await expect(page.getByText(download.fileName, { exact: true })).toBeVisible();
      await expect(page.locator(`a[href="${download.href}"][download]`)).toHaveCount(1);

      const response = await page.request.get(download.href);
      expect(response.ok()).toBe(true);
    }
  });
});
