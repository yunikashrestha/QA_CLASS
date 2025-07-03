import { test, expect } from '@playwright/test';

test.beforeEach('Goto page',async({page})=>{
    await page.goto('https://thinking-tester-contact-list.herokuapp.com/')
    await expect(page).toHaveTitle('Contact List App')
})

test("Login",async({page})=>{
    await page.locator("//input[@id='email']").fill('hehe@hehe.com')
    await page.locator("//input[@id='password']").fill('hehe123')
    await page.click('//button[@id="submit"]')

    // await expect(page.locator("//p[text()='Click on any contact to view the Contact Details']")).toBeVisible();
    await expect(page).toHaveTitle('My Contacts')
    // await expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactList')
})

test('Add Contact Button',async ({page})=>{
    await page.locator("//input[@id='email']").fill('hehe@hehe.com')
    await page.locator("//input[@id='password']").fill('hehe123')
    await page.click('//button[@id="submit"]')

    // await expect(page.locator("//p[text()='Click on any contact to view the Contact Details']")).toBeVisible();
    await expect(page).toHaveTitle('My Contacts')

    await page.click('//button[@id="add-contact"]')
    await expect(page).toHaveTitle('Add Contact');
})

test('Submit Contact',async({page})=>{
    await page.locator("//input[@id='email']").fill("hehe@hehe.com")
    await page.locator("//input[@id='password']").fill("hehe123")
    await page.click("//button[@id='submit']")

    await expect(page).toHaveTitle('My Contacts')

    await page.click("//button[@id='add-contact']")

    await expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/addContact')

    await page.locator("//input[@id='firstName']").fill("Hilu")
    await page.locator("//input[@id='lastName']").fill("Babz")
    await page.locator("//input[@id='birthdate']").fill("2061-08-14")
    await page.locator("//input[@id='email']").fill("hilu@gmail.com")
    await page.locator("//input[@id='phone']").fill("9988989898")
    await page.locator("//input[@id='street1']").fill("balaju")
    await page.locator("//input[@id='street2']").fill("balaju2")
    await page.locator("//input[@id='city']").fill("ktm")
    await page.locator("//input[@id='stateProvince']").fill("3")
    await page.locator("//input[@id='postalCode']").fill("44006")
    await page.locator("//input[@id='country']").fill("Nepal")

    await page.click('//button[@id="submit"]')

    await expect(page.locator('//p[text()="Click on any contact to view the Contact Details"]')).toBeVisible()
    await expect(page.locator('//td[text()="hilu@gmail.com"]')).toBeVisible()
})

test('Edit Contact',async ({page})=>{
    await page.locator("//input[@id='email']").fill("hehe@hehe.com")
    await page.locator("//input[@id='password']").fill("hehe123")
    await page.click("//button[@id='submit']")

    await expect(page).toHaveTitle('My Contacts')

    await page.click("//td[text()='hilu@gmail.com']")
    await expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactDetails')

    await page.click("//button[@id='edit-contact']")
    await expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/editContact')

    await page.locator("//input[@id='firstName']").fill("Hilu1")
    await page.locator("//input[@id='lastName']").fill("Babz1")
    await page.locator("//input[@id='birthdate']").fill("2061-08-14")
    await page.locator("//input[@id='email']").fill("hilu1@gmail.com")
    await page.locator("//input[@id='phone']").fill("9988989891")
    await page.locator("//input[@id='street1']").fill("balaju1")
    await page.locator("//input[@id='street2']").fill("balaju21")
    await page.locator("//input[@id='city']").fill("ktm1")
    await page.locator("//input[@id='stateProvince']").fill("31")
    await page.locator("//input[@id='postalCode']").fill("44006")
    await page.locator("//input[@id='country']").fill("Nepal")

    await page.click("//button[@id='submit']")
    await expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactDetails')
    await expect(page.locator("//span[@id='firstName']")).toHaveText('Hilu1')
})

test('Incorrect username but correct password',async({page})=>{
    await page.locator("//input[@id='email']").fill("hehe@hehe.com")
    await page.locator("//input[@id='password']").fill("hehe")
    await page.click("//button[@id='submit']")

    await expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/')
})

test('Correct username but incorrect password',async({page})=>{
    await page.locator("//input[@id='email']").fill("hehe@hehe.com")
    await page.locator("//input[@id='password']").fill('hehe123')
    await page.click("//button[@id='submit']")

    await expect(page.locator('//h1[text()="Contact List App"]')).toBeVisible()
})

test('Incorrect password and incorrect username',async({page})=>{
   await page.locator("//input[@id='email']").fill("hehe@.com")
    await page.locator("//input[@id='password']").fill('hehe')
    await page.click("//button[@id='submit']")

    await expect(page.locator('//h1[text()="Contact List App"]')).toBeVisible()
})

test.only('Deleting a contact',async({page})=>{
    await page.locator("//input[@id='email']").fill('hehe@hehe.com')
    await page.locator("//input[@id='password']").fill('hehe123')
    await page.click("//button[@id='submit']")

    await expect(page).toHaveTitle('My Contacts')

    await expect(page.locator("//td[text()='hilu@gmail.com']")).toBeVisible()

    await page.click("//td[text()='hilu@gmail.com']")

    await expect(page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactDetails')
    
     await page.click("//button[@id='delete']")
     page.once('dialog', async dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      await dialog.accept(); // use dialog.dismiss() if you want to cancel instead
    });



    


})