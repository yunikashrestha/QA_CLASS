import { test, expect } from '@playwright/test';
import { PracticeObject } from '../../pageObjects/practiceObj.po';
const userContact=require('../../fixtures/practice.json')


test.beforeEach('goto',async ({page})=>{
   await page.goto('https://thinking-tester-contact-list.herokuapp.com/')
})

test('Valid Login',async ({page})=>{
    const pr=new PracticeObject(page)
    await pr.login('hehe@hehe.com','hehe123')
    await pr.validateLogin()
})
test('Add Contact Test',async({page})=>{
    const pr=new PracticeObject(page)
    await pr.login('hehe@hehe.com','hehe123')

    await pr.addContacts(userContact.user)
    
})
test.only('Edit contact',async({page})=>{
    const pr=new PracticeObject(page)
    await pr.login('hehe@hehe.com','hehe123')
    await pr.validateLogin()
    await pr.editContactButton(userContact.user)
    await pr.editContactTest(userContact.editcontact)


})


