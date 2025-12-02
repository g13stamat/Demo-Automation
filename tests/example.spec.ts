import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/loginPage';
import { apiGet } from '../src/utils/apiClient';

test('UI login example (placeholder)', async ({ page, baseURL }) => {
  const login = new LoginPage(page);
  await page.goto(baseURL || 'https://example.com');
  // placeholder selectors - adapt to real app
  await expect(page).toHaveTitle(/Example Domain/);
});

test('API example: get public API', async () => {
  const result = await apiGet('https://api.github.com');
  expect(result).toHaveProperty('current_user_url');
});
