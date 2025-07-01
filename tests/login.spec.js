// @ts-check
const { test, expect } = require('@playwright/test');

test('Instagram login with your own credentials', async ({ page }) => {
  // Replace these with your real Instagram username and password
  const username = 'yunikshrestha4@gmail.com';
  const password = '##dreambig';

  // Go to Instagram login page
  await page.goto('https://www.instagram.com/accounts/login/');

  // Wait for username input field to appear
  await page.waitForSelector('input[name="username"]');

  // Fill in username and password
  await page.fill('input[name="username"]', username);
  await page.fill('input[name="password"]', password);

  // Click the Log In button
  await page.getByRole('button', { name: /log in/i }).click();

  // Wait for some time to let page load after login
  await page.waitForTimeout(5000);

  // Print the current page URL after login attempt
  console.log('Current URL after login attempt:', page.url());

  // Check for typical login error message (invalid credentials)
  const loginError = page.locator('text=The username you entered doesn\'t belong to an account');
  if (await loginError.isVisible()) {
    console.log('❌ Login failed: Invalid username or password');
  } else {
    console.log('✅ Login may have succeeded or is blocked by CAPTCHA');
  }
});
