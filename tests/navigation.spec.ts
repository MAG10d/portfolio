import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should highlight the "About" link when scrolling to the "About" section', async ({ page }) => {
    await page.evaluate(() => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    });
    // Wait for the underline to appear
    await page.waitForTimeout(1000);
    await expect(page.locator('a[href="#about"] > span')).toHaveClass(/scale-x-100/);
    await page.screenshot({ path: 'verification/screenshot-about.png' });
  });

  test('should highlight the "Career" link when scrolling to the "Career" section', async ({ page }) => {
    await page.evaluate(() => {
      document.getElementById('career')?.scrollIntoView({ behavior: 'smooth' });
    });
    // Wait for the underline to appear
    await page.waitForTimeout(1000);
    await expect(page.locator('a[href="#career"] > span')).toHaveClass(/scale-x-100/);
    await page.screenshot({ path: 'verification/screenshot-career.png' });
  });

  test('should highlight the "Projects" link when scrolling to the "Projects" section', async ({ page }) => {
    await page.evaluate(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    });
    // Wait for the underline to appear
    await page.waitForTimeout(1000);
    await expect(page.locator('nav a[href="#projects"] > span')).toHaveClass(/scale-x-100/);
    await page.screenshot({ path: 'verification/screenshot-projects.png' });
  });

  test('should highlight the "Skills" link when scrolling to the "Skills" section', async ({ page }) => {
    await page.evaluate(() => {
      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
    });
    // Wait for the underline to appear
    await page.waitForTimeout(1000);
    await expect(page.locator('a[href="#skills"] > span')).toHaveClass(/scale-x-100/);
    await page.screenshot({ path: 'verification/screenshot-skills.png' });
  });

  test('should highlight the "Awards" link when scrolling to the "Awards" section', async ({ page }) => {
    await page.evaluate(() => {
      document.getElementById('awards')?.scrollIntoView({ behavior: 'smooth' });
    });
    // Wait for the underline to appear
    await page.waitForTimeout(1000);
    await expect(page.locator('a[href="#awards"] > span')).toHaveClass(/scale-x-100/);
    await page.screenshot({ path: 'verification/screenshot-awards.png' });
  });
});
