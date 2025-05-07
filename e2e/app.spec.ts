import { expect, test } from './axe-test';
import { getByTestId } from './utils';

test('Home page', async ({ page, makeAxeBuilder }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Home | Angular Gallery');

  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test('Gallery page', async ({ page, makeAxeBuilder }) => {
  await page.goto('/gallery');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Photo Gallery | Angular Gallery ');

  const scanResults = await makeAxeBuilder().analyze();
  expect(scanResults.violations).toEqual([]);
  await getByTestId(page, 'photo-grid-image-button-20220615_200818').click();
  await getByTestId(page, 'dialog-close-button').waitFor();
  const dialogScanResults = await makeAxeBuilder().analyze();
  expect(dialogScanResults.violations).toEqual([]);
});

test('Shopping cart page', async ({ page, makeAxeBuilder }) => {
  await page.goto('/shopping-cart');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Shopping Cart | Angular Gallery');

  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

test('About page', async ({ page, makeAxeBuilder }) => {
  await page.goto('/about');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('About | Angular Gallery');

  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
