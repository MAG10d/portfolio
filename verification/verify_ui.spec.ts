import { test, expect } from '@playwright/test';

test('verify desktop and mobile layouts', async ({ page }) => {
  // Desktop view
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('/');
  await expect(page.locator('h1')).toBeVisible();
  await page.screenshot({ path: 'verification/desktop_home.png', fullPage: true });

  // Mobile view
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  await expect(page.locator('h1')).toBeVisible();
  // Check if navigation menu button is visible on mobile
  await expect(page.locator('button:has(svg.lucide-menu)')).toBeVisible();
  await page.screenshot({ path: 'verification/mobile_home.png', fullPage: true });
});
