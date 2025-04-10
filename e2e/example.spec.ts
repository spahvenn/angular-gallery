import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Home page', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Angular Gallery | Home');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test('Gallery page', async ({ page }) => {
  await page.goto('/gallery');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Angular Gallery | Gallery');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test('Shopping cart page', async ({ page }) => {
  await page.goto('/shopping-cart');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Angular Gallery | Shopping Cart');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
