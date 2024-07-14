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
  await page.fill('[data-qa="signup-email"]', 'd1w1a128f88wafwaf@gmail.com');
  await page.click('[data-qa="signup-button"]');
  await expect(page.locator('text=ENTER ACCOUNT INFORMATION')).toBeVisible();
  await page.getByLabel('Mr.').click();
  await page.fill('input[name="password"]', '123456789');
  await page.selectOption('[data-qa="days"]', '12');
  await page.selectOption('[data-qa="months"]', 'June');
  await page.selectOption('[data-qa="years"]', '1985');
  await page.getByLabel('Sign up for our newsletter!').click();
  await page.fill('[data-qa="first_name"]', 'Joe');
  await page.fill('[data-qa="last_name"]', 'Smith');
  await page.fill('[data-qa="company"]', 'Nestle');
  await page.fill('[data-qa="address"]', 'Swiss');
  await page.fill('[data-qa="address2"]', 'France');
  await page.selectOption('#country', 'Canada');
  await page.fill('[data-qa="state"]', 'Province');
  await page.fill('[data-qa="city"]', 'Paris');
  await page.fill('[data-qa="zipcode"]', '14652');
  await page.fill('[data-qa="mobile_number"]', '19977885544');
  await page.click('text=Create Account');

  const accountCreated = page.locator('[data-qa="account-created"]');
  await expect(accountCreated).toBeVisible();
  await page.click('text=Continue');
  const accountLoggedIn = page.locator('text= Logged in as My Name');
  await expect(accountLoggedIn).toBeVisible(); // Fixed to check for accountLoggedIn visibility
  await page.click('text=Delete Account');
  // Wait for any navigation or API call if necessary
  // await page.waitForNavigation({ waitUntil: 'networkidle' });
  await page.pause();
  // Locate the element by its data-qa attribute
  const accountDeleted = page.locator('[data-qa="account-deleted"]');

  // Use the toHaveText method to check if the element contains the expected text
  await expect(accountDeleted).toHaveText(/ACCOUNT DELETED!/i, {
    timeout: 10000,
  });
});
