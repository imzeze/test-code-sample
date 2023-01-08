import test, { expect } from '@playwright/test';

test('등록화면 진입', async ({ page }) => {
  await page.goto('http://localhost:3000/new');

  await expect(page.getByTestId('subject')).toHaveText('회원가입');
});
