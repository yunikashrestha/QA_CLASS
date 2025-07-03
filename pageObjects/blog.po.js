const {expect} =require("@playwright/test");
exports.BlogObject=class BlogObject{
    constructor(page){
        this.page=page;

        this.register="//a[@href='/register']"
        this.fullname="//input[@name='name']"
        this.email="//input[@name='email']"
        this.password="//input[@name='password']"
        this.rePassword="//input[@name='confirmPassword']"
        this.submit="//button[@type='submit']"
        this.login='//a[@href="/login"]'
               
    }
    async registeruser(user){
        await this.page.locator(this.register).click()
        await expect(this.page).toHaveURL('http://localhost:5173/register')

        await this.page.locator(this.fullname).fill(user.fullname)
        await this.page.locator(this.email).fill(user.email)
        await this.page.locator(this.password).fill(user.password)
        await this.page.locator(this.rePassword).fill(user.rePassword)
        await this.page.locator(this.submit).click()

        await expect(this.page).toHaveURL('http://localhost:5173/login')


    }
    async loginuser(user){
        await this.page.locator(this.login).click()
        await this.page.locator(this.email).fill(user.email)
        await this.page.locator(this.password).fill(user.password)
        await this.page.locator(this.submit).click()

        await expect(this.page).toHaveURL('http://localhost:5173/homePage')

    }

}

