import { expect, test } from '@playwright/test';

test.describe('Leak Rate Units resource', () => {
  test('renders the short explanation page with core conversions and CTA', async ({ page }) => {
    await page.goto('/resources/glossary/leak-rate-units');

    await expect(page).toHaveTitle(/Leak Rate Units/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Leak Rate Units');
    await expect(page.getByText('Leak rate = pressure change x volume / time').first()).toBeVisible();
    await expect(page.getByText('1 Pa·m³/s = 10 mbar·L/s').first()).toBeVisible();
    await expect(page.getByText('ppm is concentration').first()).toBeVisible();
    await expect(page.getByText('g/a (g/year) and %/year are application units')).toBeVisible();

    const converterLink = page.getByRole('link', { name: 'Open Unit Converter' });
    await expect(converterLink).toBeVisible();
    await expect(converterLink).toHaveAttribute(
      'href',
      '/resources/useful-tools/leak-rate-unit-converter',
    );
  });

  test('fits on mobile without horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/resources/glossary/leak-rate-units');

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );

    await expect(page.getByRole('heading', { level: 1 })).toContainText('Leak Rate Units');
    expect(overflow).toBe(false);
  });
});
