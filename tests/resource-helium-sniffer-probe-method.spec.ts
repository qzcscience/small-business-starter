import { expect, test } from '@playwright/test';

test.describe('Helium Sniffer Probe Method resource', () => {
  test('renders the method page with image, principle, workflow, sensitivity, and precautions', async ({
    page,
  }) => {
    await page.goto('/resources/glossary/helium-sniffer-probe-method');

    await expect(page).toHaveTitle(/Helium Sniffer Probe Method/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      'Helium Sniffer Probe Method',
    );
    await expect(page.getByText('From escaping helium to detector signal')).toBeVisible();
    await expect(page.getByText('Typical helium sniffer probe workflow')).toBeVisible();
    await expect(page.getByText('Why sniffer sensitivity depends on technique')).toBeVisible();
    await expect(page.getByText('Operational precautions from field practice')).toBeVisible();

    const diagram = page.getByRole('img', {
      name: /Helium sniffer probe method process overview and operating principle/i,
    });
    await expect(diagram).toBeVisible();
    await expect(diagram).toHaveAttribute('src', /helium-sniffer-probe-method-corrected-4k/);

    await expect(page.getByText('2.5 x 10^-9 Pa m3/s')).toBeVisible();
    await expect(page.getByText('around 1 cm from the surface')).toBeVisible();
    await expect(page.getByText('recover helium where available')).toBeVisible();
    await expect(page.getByText('Need to locate leaks on a pressurized part?')).toBeVisible();
  });

  test('does not keep the old sniffer-method URL', async ({ page }) => {
    const response = await page.goto('/resources/glossary/sniffer-method');

    expect(response?.status()).toBe(404);
    await expect(
      page.getByRole('heading', { level: 1, name: 'Helium Sniffer Probe Method' }),
    ).toHaveCount(0);
  });

  test('fits on mobile without horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/resources/glossary/helium-sniffer-probe-method');

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );

    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      'Helium Sniffer Probe Method',
    );
    expect(overflow).toBe(false);
  });
});
