import test, { expect, request } from '@playwright/test';

test('등록화면 진입', async ({ page }) => {
  await page.goto('http://localhost:3000/new');

  const requestContext = await request.newContext();
  const res = await requestContext.get(
    `https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1`,
  );
  const data = await res.json();
  const tempMail = data[0];

  await expect(page.getByTestId('subject')).toHaveText('회원가입');
  await page.getByPlaceholder('이메일').fill(tempMail);
});
