const {expect} =require("@playwright/test");

exports.PracticeObject=class PracticeObject{
    constructor(page){
        this.page=page
        this.email='//input[@id="email"]'
        this.password='//input[@id="password"]'
        this.submit='//button[@id="submit"]'
        this.addContact='//button[@id="add-contact"]'
        this.firstName="//input[@id='firstName']"
        this.lastName="//input[@id='lastName']"
        this.birthdate="//input[@id='birthdate']"
        this.phone="//input[@id='phone']"
        this.street1="//input[@id='street1']"
        this.street2="//input[@id='street2']"
        this.city="//input[@id='city']"
        this.stateProvince="//input[@id='stateProvince']"
        this.postalCode="//input[@id='postalCode']"
        this.country="//input[@id='country']"
        this.editContact="//button[@id='edit-contact']"
    }

    async login(email,password){
        await this.page.locator(this.email).fill(email)
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.submit).click()
    }

    async validateLogin(){
        await expect(this.page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactList')
    }
    async addContacts(user){
        await this.page.locator(this.addContact).click()
        await expect(this.page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/addContact')
        await this.page.locator(this.firstName).fill(user.firstName)
        await this.page.locator(this.lastName).fill(user.lastName)
        await this.page.locator(this.birthdate).fill(user.birthdate)
        await this.page.locator(this.email).fill(user.email)
        await this.page.locator(this.phone).fill(user.phone)
        await this.page.locator(this.street1).fill(user.street1)
        await this.page.locator(this.street2).fill(user.street2)
        await this.page.locator(this.city).fill(user.city)
        await this.page.locator(this.stateProvince).fill(user.stateProvince)
        await this.page.locator(this.postalCode).fill(user.postalCode)
        await this.page.locator(this.country).fill(user.country)
        await this.page.locator(this.submit).click()

        await expect(this.page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactList')
        await expect(this.page.locator(`//td[text()="${user.email}"]`)).toBeVisible()


    }

    async editContactButton(user){
        this.page.locator(`//td[text()="${user.email}"]`).click()
        await expect(this.page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactDetails')
        this.page.locator(this.editContact).click()
        await expect(this.page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/editContact')
     

    }
    async editContactTest(edit){
        await this.page.locator(this.firstName).fill(edit.firstName)
        await this.page.locator(this.lastName).fill(edit.lastName)
        await this.page.locator(this.birthdate).fill(edit.birthdate)
        await this.page.locator(this.email).fill(edit.email)
        await this.page.locator(this.phone).fill(edit.phone)
        await this.page.locator(this.street1).fill(edit.street1)
        await this.page.locator(this.street2).fill(edit.street2)
        await this.page.locator(this.city).fill(edit.city)
        await this.page.locator(this.stateProvince).fill(edit.stateProvince)
        await this.page.locator(this.postalCode).fill(edit.postalCode)
        await this.page.locator(this.country).fill(edit.country)
        await this.page.locator(this.submit).click()
       

        await expect(this.page).toHaveURL('https://thinking-tester-contact-list.herokuapp.com/contactDetails')


    }
    
}