import { test, expect } from '@playwright/test';

test('Register User', async ({ page }) => {
  await page.goto('https://automationexercise.com');
  await expect(page).toHaveURL('https://automationexercise.com/');
  const homePage = page.locator('text=Home');
  await expect(homePage).toHaveCSS('color', 'rgb(255, 165, 0)');
  await page.click('text= Signup / Login');
  const newUserSignup = page.locator('.signup-form');
  await expect(newUserSignup).toBeVisible();
  await page.fill('[data-qa="signup-name"]', 'My Name');
  await page.fill('[data-qa="signup-email"]', 'dwafwafwaf@gmail.com')
  await page.click('[data-qa="signup-button"]');
  await page.pause();
  await expect(page.locator('text=ENTER ACCOUNT INFORMATION')).toBeVisible();
  await page.getByLabel('Mr.').click();
  await page.fill('input[name="password"]', '123456789');
  await page.selectOption('[data-qa="days"]', '12');
  await page.selectOption('[data-qa="months"]', 'June');
  await page.selectOption('[data-qa="years"]', '1985');
  await page.getByLabel('Sign up for our newsletter!').click();
  await page.fill('[data-qa="first_name"]', 'Joe');
  await page.fill('[data-qa="last_name"]', 'Smith');
});

// q: hello

