const {expect} =require("@playwright/test");

exports.ContactPage=class ContactPage{
    constructor(page){
        this.page=page;
        this.addContact='//button[@id="add-contact"]';
        this.firstName='//input[@id="firstName"]';
        this.lastName='//input[@id="lastName"]';
        this.DOB='//input[@id="birthdate"]';
        this.email='//input[@id="email"]';
        this.phone='//input[@id="phone"]';
        this.address1='//input[@id="street1"]';
        this.address2='//input[@id="street2"]';
        this.city='//input[@id="city"]';
        this.state='//input[@id="stateProvince"]';
        this.postalcode='//input[@id="postalCode"]';
        this.country='//input[@id="country"]';
        this.submit='//input[@id="submit"]';
    }

    //Creating a function and adding action 
    async contactAdd(first,last,date,mail,phonenumber,place1,place2,cty,states,postal,nation){
        await this.page.locator(this.addContact).click();
        await this.page.locator(this.firstName).fill(first);
        await this.page.locator(this.lastName).fill(last);
        await this.page.locator(this.DOB).fill(date);
        await this.page.locator(this.email).fill(mail);
        await this.page.locator(this.phone).fill(phonenumber);
        await this.page.locator(this.address1).fill(place1);
        await this.page.locator(this.address2).fill(place2);
        await this.page.locator(this.city).fill(cty);
        await this.page.locator(this.state).fill(states);
        await this.page.locator(this.postalcode).fill(postal);
        await this.page.locator(this.country).fill(nation);
        await this.page.locator(this.submit).click();


    }

    async validateContactCreated(fName,lName,dob,email,phone,address,city,state,postal,country){
        const fNameValidation=await this.page.locator(this.savedFirstName);
        const lNameValidation=await this.page.locator(this.savedLastName);
        const dobValidation=await this.page.locator(this.savedDOB);
        const emailValidation=await this.page.locator(this.savedEmail);
        const phoneValidation=await this.page.locator(this.savedPhone);
        const addressValidation=await this.page.locator(this.savedAddress);
        const cityValidation=await this.page.locator(this.savedCity);
        const stateValidation=await this.page.locator(this.savedState);
        const postalValidation=await this.page.locator(this.savedPostal);
        const countryValidation=await this.page.locator(this.savedCountry);
        await expect(fNameValidation).toHaveText(fName);
        await expect(lNameValidation).toHaveText(lName);
        await expect(dobValidation).toHaveText(dob);
        await expect(emailValidation).toHaveText(email);
        await expect(phoneValidation).toHaveText(phone);
        await expect(addressValidation).toHaveText(address);
        await expect(cityValidation).toHaveText(city);
        await expect(stateValidation).toHaveText(state);
        await expect(postalValidation).toHaveText(postal);
        await expect(countryValidation).toHaveText(country);

        


    }
    async contactEdit (firstName){
    await this.page.locator (this.editContact).click();
    await this.page.waitForTimeout(2000);
    await this.page.locator (this.firstName).clear();
    await this.page.locator (this.firstName).fill(firstName);
    await this.page.waitForTimeout(2000);
    await this.page.loactor(this.Save).click();
   }





}