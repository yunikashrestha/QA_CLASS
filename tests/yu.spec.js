import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
    await page.goto('https://nccs.edu.np/public/college');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('NCCS - College of IT & Management');
});


test('EMIS Portal', async ({ page }) => {
    await page.goto('https://nccs.edu.np/college/');
    await page.click('//a[@href="http://110.44.113.165:85/EMISPortal" and text()="EMIS Portal"]')

    await expect(page.locator('//div[@class="container"]')).toBeVisible()
});


test('EMIS Portal Valid Login', async ({ page }) => {
    await page.goto('https://nccs.edu.np/college/');
    await page.click('//a[@href="http://110.44.113.165:85/EMISPortal" and text()="EMIS Portal"]')

    await page.locator('//input[@placeholder="Username"]').fill('NCCSCSIT490')
    await page.locator('//input[@placeholder="Password"]').fill('A8QC$$014')
    await page.click('//input[@type="submit"]')

    await expect(page.locator('//input[@value="View Full Routine"]')).toBeVisible()
   
});

test('EMIS Portal Invalid Login', async ({ page }) => {
    await page.goto('https://nccs.edu.np/college/');
    await page.click('//a[@href="http://110.44.113.165:85/EMISPortal" and text()="EMIS Portal"]')

    await page.locator('//input[@placeholder="Username"]').fill('NCCSCSIT490')
    await page.locator('//input[@placeholder="Password"]').fill('yunika')
    await page.click('//input[@type="submit"]')

    await expect(page.locator('//span[@id="lblErrorMessage"]')).toBeVisible()
   
});