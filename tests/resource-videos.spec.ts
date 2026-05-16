import { expect, test } from '@playwright/test';

test.describe('Resource videos', () => {
  test('renders unique YouTube videos with related pages', async ({ page }) => {
    await page.goto('/resources/videos');

    await expect(page.getByRole('heading', { level: 1 })).toContainText('Videos');
    await expect(page.locator('iframe[src*="youtube-nocookie.com/embed/"]')).toHaveCount(2);
    await expect(page.locator('iframe[src*="dZR7PMBhHFc"]')).toHaveCount(1);
    await expect(page.locator('iframe[src*="snoiqqyFoIQ"]')).toHaveCount(1);
    await expect(page.locator('iframe[src*="playlists"]')).toHaveCount(0);
    await expect(page.locator('iframe[src*="@oliverqi1987"]')).toHaveCount(0);

    await expect(page.getByText('Wayeal Company and SFJ-231 Product Video')).toBeVisible();
    await expect(page.getByText('Vacuum Chamber Helium Leak Detection System Video')).toBeVisible();

    const companyVideo = page
      .locator('article')
      .filter({ hasText: 'Wayeal Company and SFJ-231 Product Video' });
    await expect(companyVideo.getByRole('link', { name: 'Home', exact: true })).toHaveAttribute(
      'href',
      '/',
    );
    await expect(companyVideo.getByRole('link', { name: 'Helium Leak Detector SFJ-231' })).toHaveAttribute(
      'href',
      '/products/helium-leak-detector-SFJ-231',
    );

    const chamberVideo = page
      .locator('article')
      .filter({ hasText: 'Vacuum Chamber Helium Leak Detection System Video' });
    await expect(
      chamberVideo.getByRole('link', { name: 'Automotive AC Condenser Helium Leak Detection System' }),
    ).toHaveAttribute(
      'href',
      '/products/vacuum-chamber-leak-detection/automotive/sfz-344-car-ac-condenser',
    );
  });

  test('fits video cards on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/resources/videos');

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );

    await expect(page.locator('iframe[src*="youtube-nocookie.com/embed/"]').first()).toBeVisible();
    expect(overflow).toBe(false);
  });
});
