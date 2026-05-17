import { expect, test } from '@playwright/test';

test.describe('Helium Spray Method resource', () => {
  test('renders the rich method page with image, workflow, precautions, and video', async ({ page }) => {
    await page.goto('/resources/glossary/helium-spray-method');

    await expect(page).toHaveTitle(/Helium Spray Method/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Helium Spray Method');
    await expect(page.getByText('Typical helium spray test workflow')).toBeVisible();
    await expect(page.getByText('Operational precautions from field practice')).toBeVisible();
    await expect(page.getByText('Need to localize leaks on your part?')).toBeVisible();

    const diagram = page.getByRole('img', {
      name: /Helium spray method workflow and operating principle/i,
    });
    await expect(diagram).toBeVisible();
    await expect(diagram).toHaveAttribute('src', /helium-spray-method-image2-4k/);

    await expect(page.locator('iframe[src*="youtube-nocookie.com/embed/KhgjPk0dUFU"]')).toHaveCount(1);
    await expect(page.getByRole('heading', { level: 2, name: 'See the Method in Action' })).toBeVisible();
    const videoAppearsBeforeDiagram = await page.evaluate(() => {
      const video = document.querySelector('iframe[src*="youtube-nocookie.com/embed/KhgjPk0dUFU"]');
      const image = document.querySelector('img[alt*="Helium spray method workflow"]');

      return Boolean(
        video &&
          image &&
          video.compareDocumentPosition(image) & Node.DOCUMENT_POSITION_FOLLOWING,
      );
    });

    expect(videoAppearsBeforeDiagram).toBe(true);
    await expect(page.getByText('Find and repair large leaks first')).toBeVisible();
    await expect(page.getByText('For large cavities or long pipelines')).toBeVisible();
  });

  test('does not keep the old spray-probe URL', async ({ page }) => {
    const response = await page.goto('/resources/glossary/spray-probe-method');

    expect(response?.status()).toBe(404);
    await expect(page.getByRole('heading', { level: 1, name: 'Helium Spray Method' })).toHaveCount(0);
  });

  test('fits on mobile without horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/resources/glossary/helium-spray-method');

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );

    await expect(page.getByRole('heading', { level: 1 })).toContainText('Helium Spray Method');
    await expect(page.locator('iframe[src*="KhgjPk0dUFU"]')).toBeVisible();
    expect(overflow).toBe(false);
  });
});
