// @ts-check
const { test, expect } = require('@playwright/test');

test('Instagram login with your own credentials using XPath', async ({ page }) => {
  const username = 'yunikshrestha4@gmail.com';
  const password = '##dreambig';

  await page.goto('https://www.instagram.com/accounts/login/');

  // Wait for username input field to appear using XPath
  await page.waitForSelector('xpath=//input[@name="username"]');

  // Fill in username and password using XPath
  await page.fill('xpath=//input[@name="username"]', username);
  await page.fill('xpath=//input[@name="password"]', password);

  // Click the Log In button using XPath (button with text 'Log In')
  await page.click('xpath=//button[text()="Log In"]');

  // Wait for page load after login attempt
  await page.waitForTimeout(5000);

  console.log('Current URL after login attempt:', page.url());

  // Check for login error message using XPath
  const loginError = page.locator('xpath=//p[contains(text(), "doesn\'t belong to an account")]');
  if (await loginError.isVisible()) {
    console.log('❌ Login failed: Invalid username or password');
  } else {
    console.log('✅ Login may have succeeded or is blocked by CAPTCHA');
  }
});
