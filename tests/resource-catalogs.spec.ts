import { expect, test } from '@playwright/test';

const catalogDownload = {
  title: 'Wayeal One-stop Leak Detection Solutions',
  standard: 'Catalog',
  fileName: 'wayeal-one-stop-leak-detection-solutions.pdf',
  href: '/downloads/resources/product-catalogs/wayeal-one-stop-leak-detection-solutions.pdf',
};

test.describe('Resource product catalogs', () => {
  test('renders the Wayeal catalog PDF download', async ({ page }) => {
    await page.goto('/resources/downloads/product-catalogs');

    await expect(page.getByRole('heading', { level: 1 })).toContainText('Product Catalogs');
    await expect(page.getByRole('link', { name: 'Download PDF' })).toHaveCount(1);

    const downloadItem = page.locator('article').filter({ hasText: catalogDownload.fileName });

    await expect(downloadItem).toHaveCount(1);
    await expect(downloadItem.getByText(catalogDownload.standard, { exact: true })).toBeVisible();
    await expect(downloadItem.getByText(catalogDownload.title, { exact: true })).toBeVisible();
    await expect(downloadItem.getByText(catalogDownload.fileName, { exact: true })).toBeVisible();
    await expect(downloadItem.locator(`a[href="${catalogDownload.href}"][download]`)).toHaveCount(1);

    const response = await page.request.get(catalogDownload.href);
    expect(response.ok()).toBe(true);
  });

  test('fits the product catalogs download on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/resources/downloads/product-catalogs');

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );

    await expect(page.getByRole('link', { name: 'Download PDF' })).toBeVisible();
    expect(overflow).toBe(false);
  });
});
