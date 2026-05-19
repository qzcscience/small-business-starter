import { expect, test } from '@playwright/test';

test.describe('Beta Enerji customer success news article', () => {
  test('renders the listing card and article detail', async ({ page }) => {
    await page.goto('/news/customer-success');

    await expect(page.getByRole('heading', { level: 1, name: 'Customer Success' })).toBeVisible();

    const card = page
      .locator('article')
      .filter({ hasText: 'Wayeal Delivers Vacuum Chamber Leak Detection System for Beta Enerji' });

    await expect(card.getByRole('heading', { level: 2 })).toContainText(
      'Wayeal Delivers Vacuum Chamber Leak Detection System for Beta Enerji',
    );
    await expect(
      card.getByRole('link', {
        name: 'Wayeal Delivers Vacuum Chamber Leak Detection System for Beta Enerji\'s New Flagship Factory',
      }).first(),
    ).toHaveAttribute('href', '/news/customer-success/beta-enerji-vacuum-chamber-leak-detection-system');

    await page.goto('/news/customer-success/beta-enerji-vacuum-chamber-leak-detection-system');

    await expect(page).toHaveTitle(/Wayeal Delivers Vacuum Chamber Leak Detection System for Beta Enerji/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Beta Enerji');
    await expect(page.getByText('June 24, 2025')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Customer Success' }).first()).toHaveAttribute(
      'href',
      '/news/customer-success',
    );

    const heroImage = page.getByRole('img', {
      name: 'Wayeal vacuum chamber leak detection machine installed for Beta Enerji',
    });
    await expect(heroImage).toBeVisible();
    await expect(heroImage).toHaveAttribute(
      'src',
      /\/images\/news\/beta-enerji-vacuum-chamber-machine-photo-1\.jpg$/,
    );

    await expect(
      page.getByRole('img', {
        name: /Wayeal vacuum chamber leak detection system prepared for Beta Enerji/i,
      }),
    ).toHaveAttribute('src', /\/images\/news\/beta-enerji-vacuum-chamber-leak-detection-system\.jpg$/);
    await expect(
      page.getByRole('img', {
        name: /Vacuum chamber leak detection equipment for automated production quality control/i,
      }),
    ).toHaveAttribute('src', /\/images\/news\/beta-enerji-vacuum-chamber-machine-photo-2\.jpg$/);
    await expect(
      page.getByRole('img', {
        name: /Wayeal vacuum chamber leak detection machine details for Beta Enerji delivery/i,
      }),
    ).toHaveAttribute('src', /\/images\/news\/beta-enerji-vacuum-chamber-machine-photo-3\.jpg$/);

    await expect(page.getByText('Beta Enerji\'s new flagship factory in Turkey')).toBeVisible();
    await expect(page.getByText('Automated vacuum chamber testing helps manufacturers catch those issues early.')).toBeVisible();

    const sourceLink = page.getByRole('link', { name: 'LinkedIn post' });
    await expect(sourceLink).toHaveAttribute(
      'href',
      /linkedin\.com\/posts\/activity-7343085347041411074-gwSC/,
    );

    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload();

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );

    expect(overflow).toBe(false);
  });
});
