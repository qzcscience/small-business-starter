import { expect, test } from '@playwright/test';

test.describe('Vacuum Chamber Helium Leak Detection Method resource', () => {
  test('renders the method page with image, workflow, result logic, and CTA', async ({ page }) => {
    await page.goto('/resources/glossary/vacuum-chamber-helium-leak-detection-method');

    await expect(page).toHaveTitle(/Vacuum Chamber Helium Leak Detection Method/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      'Vacuum Chamber Helium Leak Detection Method',
    );

    const diagram = page.getByRole('img', {
      name: /Vacuum chamber helium leak detection method workflow/i,
    });
    await expect(diagram).toBeVisible();
    await expect(diagram).toHaveAttribute(
      'src',
      /vacuum-chamber-helium-leak-detection-method-v2-suction-flow-enhanced-4k/,
    );

    await expect(page.getByText('How the vacuum chamber method works')).toBeVisible();
    await expect(page.getByText('Typical vacuum chamber helium leak test sequence')).toBeVisible();
    await expect(page.getByText('V2 sampling line').first()).toBeVisible();
    await expect(page.getByText('Evacuate the chamber through V3')).toBeVisible();
    await expect(page.getByText('Evacuate the workpiece through V4')).toBeVisible();
    await expect(page.getByText('Fill the workpiece with helium through V5')).toBeVisible();
    await expect(page.getByText('PASS').first()).toBeVisible();
    await expect(page.getByText('FAIL').first()).toBeVisible();
    await expect(page.getByText('Need a vacuum chamber helium leak test process?')).toBeVisible();
  });

  test('does not keep the old vacuum-method URL', async ({ page }) => {
    const response = await page.goto('/resources/glossary/vacuum-method');

    expect(response?.status()).toBe(404);
    await expect(
      page.getByRole('heading', {
        level: 1,
        name: 'Vacuum Chamber Helium Leak Detection Method',
      }),
    ).toHaveCount(0);
  });

  test('fits on mobile without horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/resources/glossary/vacuum-chamber-helium-leak-detection-method');

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );

    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      'Vacuum Chamber Helium Leak Detection Method',
    );
    expect(overflow).toBe(false);
  });
});
