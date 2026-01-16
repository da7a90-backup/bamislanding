import { test, expect } from '@playwright/test';

test('test scroll behavior and header visibility', async ({ page }) => {
  await page.goto('http://localhost:3333');

  // Wait for page to load
  await page.waitForLoadState('networkidle');

  // Check initial state
  console.log('=== Initial State ===');
  const header = page.locator('header');
  const headerVisible = await header.isVisible();
  console.log('Header visible:', headerVisible);

  // Get initial viewport height
  const viewportHeight = await page.evaluate(() => window.innerHeight);
  console.log('Viewport height:', viewportHeight);

  // Get page height
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log('Page scroll height:', pageHeight);

  // Check sections
  const sections = await page.locator('section').count();
  console.log('Number of sections:', sections);

  // Scroll down 500px
  console.log('\n=== Scrolling down 500px ===');
  await page.evaluate(() => window.scrollBy(0, 500));
  await page.waitForTimeout(500);

  const scrollY = await page.evaluate(() => window.scrollY);
  console.log('Current scroll position:', scrollY);

  // Check header visibility after scroll
  const headerOpacity = await header.evaluate((el) => {
    return window.getComputedStyle(el).opacity;
  });
  console.log('Header opacity after scroll down:', headerOpacity);

  // Scroll back up
  console.log('\n=== Scrolling back up ===');
  await page.evaluate(() => window.scrollBy(0, -300));
  await page.waitForTimeout(500);

  const newScrollY = await page.evaluate(() => window.scrollY);
  console.log('New scroll position:', newScrollY);

  const headerOpacity2 = await header.evaluate((el) => {
    return window.getComputedStyle(el).opacity;
  });
  console.log('Header opacity after scroll up:', headerOpacity2);

  // Take screenshots
  await page.screenshot({ path: 'tests/screenshots/initial.png', fullPage: true });

  console.log('\n=== Test Complete ===');
});
