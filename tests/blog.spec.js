import {test,expect} from '@playwright/test'
import { BlogObject } from '../../pageObjects/blog.po'
const userData=require('../../fixtures/blogFixture.json')


test.beforeEach('goto',async({page})=>{

    await page.goto("http://localhost:5173/")
})

test('Register User',async({page})=>{
    const bo=new BlogObject(page)
    await bo.registeruser(userData.user)
    


})
test.only('Login User',async({page})=>{
    const bo=new BlogObject(page)
    await bo.loginuser(userData.user)
    


})
    


