import { Locator, Page } from '@playwright/test';

export function getByTestId(page: Page, testId: string): Locator {
  return page.locator(`[data-testid="${testId}"]`);
}
