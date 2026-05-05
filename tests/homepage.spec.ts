import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('renders heading and CTA', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('link', { name: /get a free quote/i }).first()).toBeVisible();
  });

  test('has correct page title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Wayeal/i);
  });

  test('has meta description', async ({ page }) => {
    await page.goto('/');
    const meta = page.locator('meta[name="description"]');
    await expect(meta).toHaveAttribute('content', /.+/);
  });

  test('loads the company video only after clicking play', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { level: 2, name: 'About Wayeal' })).toBeVisible();
    await expect(page.locator('iframe[src*="youtube-nocookie.com"]')).toHaveCount(0);

    await page.getByRole('button', { name: 'Play About Wayeal video' }).click();

    const iframe = page.locator('iframe[title="About Wayeal video"]');
    await expect(iframe).toBeVisible();
    await expect(iframe).toHaveAttribute('src', /youtube-nocookie\.com\/embed\/dZR7PMBhHFc/);
  });

  test('company video fits on mobile without horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    await expect(overflow).toBe(false);
    await expect(page.getByRole('button', { name: 'Play About Wayeal video' })).toBeVisible();
  });

  test('FAQ questions expand answers on click', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    await expect(page.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' })).toBeVisible();
    await expect(page.getByText('What is the typical lead time?')).toBeVisible();
    await expect(page.getByText('What warranty coverage do you provide?')).toBeVisible();
    await expect(page.getByText('Which payment methods do you accept?')).toBeVisible();

    const leadTimeAnswer = page.getByText('Standard lead times depend on product configuration');
    await expect(leadTimeAnswer).toBeHidden();

    await page.getByText('What is the typical lead time?').click();
    await expect(leadTimeAnswer).toBeVisible();

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    await expect(overflow).toBe(false);
  });

  test('mobile menu remains interactive after client-side navigation', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const menuButton = page.locator('#menu-toggle');
    const mobileMenu = page.locator('#mobile-menu');

    for (let i = 0; i < 6; i += 1) {
      await menuButton.click();
      await expect(menuButton).toHaveAttribute('aria-expanded', i % 2 === 0 ? 'true' : 'false');
      if (i % 2 === 0) {
        await expect(mobileMenu).toBeVisible();
      } else {
        await expect(mobileMenu).toBeHidden();
      }
    }

    await menuButton.click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    const productSubmenuButton = page.getByRole('button', { name: 'Toggle Products submenu' });
    await productSubmenuButton.click();
    await expect(page.locator('.mobile-dropdown-panel').first()).not.toHaveClass(/(^|\s)hidden(\s|$)/);

    await mobileMenu.getByRole('link', { name: 'Products', exact: true }).click();
    await expect(page).toHaveURL(/\/products\/?$/);
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    await menuButton.click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    await expect(mobileMenu).toBeVisible();

    await page.setViewportSize({ width: 1100, height: 800 });
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    await page.setViewportSize({ width: 390, height: 844 });
    await menuButton.click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    await expect(mobileMenu).toBeVisible();
  });

  test('top-level navbar active state follows client-side navigation', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });

    const items = [
      { label: 'Products', href: '/products' },
      { label: 'Industry Solutions', href: '/products/vacuum-chamber-leak-detection' },
      { label: 'Our Customers', href: '/customers' },
      { label: 'Resources', href: '/resources' },
      { label: 'News', href: '/news' },
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ];

    const primaryNav = page.getByRole('navigation', { name: 'Primary navigation' });
    const activeTopLevelLabels = async () =>
      primaryNav.locator('.nav-item').evaluateAll((links) =>
        links
          .filter((link) => link.classList.contains('bg-primary/10') && link.classList.contains('text-primary'))
          .map((link) => link.textContent?.replace(/\s+/g, ' ').trim()),
      );

    const expectActive = async (label: string) => {
      await expect
        .poll(activeTopLevelLabels)
        .toEqual([label]);

      for (const item of items) {
        const link = primaryNav.getByRole('link', { name: item.label, exact: true });
        if (item.label === label) {
          await expect(link).toHaveClass(/(^|\s)bg-primary\/10(\s|$)/);
          await expect(link).toHaveClass(/(^|\s)text-primary(\s|$)/);
        } else {
          await expect(link).not.toHaveClass(/(^|\s)bg-primary\/10(\s|$)/);
        }
      }
    };

    await page.goto('/customers');
    await expectActive('Our Customers');

    for (const item of items) {
      await primaryNav.getByRole('link', { name: item.label, exact: true }).click();
      await expect(page).toHaveURL(new RegExp(`${item.href}/?$`));
      await expectActive(item.label);
    }

    const nestedRoutes = [
      { path: '/products/vacuum-chamber-leak-detection/automotive', activeLabel: 'Industry Solutions' },
      { path: '/products/helium-recovery', activeLabel: 'Products' },
      { path: '/resources/glossary', activeLabel: 'Resources' },
    ];

    for (const route of nestedRoutes) {
      await page.goto(route.path);
      await expectActive(route.activeLabel);
    }
  });
});
