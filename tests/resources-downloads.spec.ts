import { expect, test } from '@playwright/test';

const certificationDownloads = [
  {
    standard: 'ISO 9001',
    fileName: 'wayeal-iso-9001-quality-management-system.pdf',
    href: '/downloads/resources/certifications-ce-ul-iso/wayeal-iso-9001-quality-management-system.pdf',
  },
  {
    standard: 'ISO 14001',
    fileName: 'wayeal-iso-14001-environmental-management-system.pdf',
    href: '/downloads/resources/certifications-ce-ul-iso/wayeal-iso-14001-environmental-management-system.pdf',
  },
  {
    standard: 'ISO 45001',
    fileName: 'wayeal-iso-45001-occupational-health-safety-management-system.pdf',
    href: '/downloads/resources/certifications-ce-ul-iso/wayeal-iso-45001-occupational-health-safety-management-system.pdf',
  },
  {
    standard: 'ISO 50001',
    fileName: 'wayeal-iso-50001-energy-management-system.pdf',
    href: '/downloads/resources/certifications-ce-ul-iso/wayeal-iso-50001-energy-management-system.pdf',
  },
  {
    standard: 'ISO/IEC 20000-1:2018',
    fileName: 'wayeal-iso-iec-20000-1-information-technology-service-management-system.pdf',
    href: '/downloads/resources/certifications-ce-ul-iso/wayeal-iso-iec-20000-1-information-technology-service-management-system.pdf',
  },
  {
    standard: 'CE',
    fileName: 'SFJ-231-CE-Certificate.pdf',
    href: '/downloads/products/SFJ-231/SFJ-231-CE-Certificate.pdf',
  },
  {
    standard: 'NRTL',
    fileName: 'SFJ-231-NRTL-Certificate.pdf',
    href: '/downloads/products/SFJ-231/SFJ-231-NRTL-Certificate.pdf',
  },
];

test.describe('Resource certification downloads', () => {
  test('renders certification PDF links', async ({ page }) => {
    await page.goto('/resources/downloads/certifications-ce-ul-iso');

    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      'Certifications (CE / UL / ISO)',
    );
    await expect(page.getByRole('link', { name: 'Download PDF' })).toHaveCount(7);

    for (const download of certificationDownloads) {
      const downloadItem = page.locator('article').filter({ hasText: download.fileName });

      await expect(downloadItem).toHaveCount(1);
      await expect(downloadItem.getByText(download.standard, { exact: true })).toBeVisible();
      await expect(downloadItem.getByText(download.fileName, { exact: true })).toBeVisible();
      await expect(downloadItem.locator(`a[href="${download.href}"][download]`)).toHaveCount(1);

      const response = await page.request.get(download.href);
      expect(response.ok()).toBe(true);
    }
  });

  test('fits certification downloads on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/resources/downloads/certifications-ce-ul-iso');

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    );

    await expect(page.getByRole('link', { name: 'Download PDF' }).first()).toBeVisible();
    expect(overflow).toBe(false);
  });
});
