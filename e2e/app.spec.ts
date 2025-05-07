import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Home page', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Home | Angular Gallery');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test('Gallery page', async ({ page }) => {
  await page.goto('/gallery');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Photo Gallery | Angular Gallery ');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test('Shopping cart page', async ({ page }) => {
  await page.goto('/shopping-cart');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Shopping Cart | Angular Gallery');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test('About page', async ({ page }) => {
  await page.goto('/about');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('About | Angular Gallery');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
