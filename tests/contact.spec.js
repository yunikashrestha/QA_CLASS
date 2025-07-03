import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pageObjects/login.po";
import { ContactPage } from "../../pageObjects/contact.po";
const testData = require("../../fixtures/loginFixture.json");
const contactTestData = require("../../fixtures/contactFixture.json");
const { authenticateUser, createEntity } = require("../../utils/helper.spec");
let accessToken;

test.beforeEach(async ({ page }) => {
  const Login = new LoginPage(page);
  await page.goto("/");
  await Login.login(testData.validUser.userName, testData.validUser.password);
  await Login.verifyValidLogin();
});

// test.describe("Valid Contact Test"),() => {
//     test("Adding contact using all the requirement"),
//       async ({ page }) => {
//         const contact = new ContactPage(page);
//         await contact.contactAdd(testData.validContact.firstName);
//         await contact.verifyValidLogin();
//       };
//   };
test.describe("Valid Contact Test", () => {
  test("Adding contact using all the requirements", async ({ page }) => {
    const contact = new ContactPage(page);
    await contact.contactAdd(testData.validContact.firstName);
    await contact.verifyValidLogin();
  });
});
test.describe("Contact edit test", () => {
  test.only("Contact Edit Test ", async ({ page, request }) => {
    const Data = {
      firstName: "Hello",
      lastName: "hello2",
      birthdate: "1990-06-30",
      email: "hello@gmail",
      phone: "948598495",
      street1: "address1",
      city: "city1",
      stateProvince: "State1",
      postalCode: "123",
      country: "nepal",
    };
    const contact = new ContactPage(page);
    accessToken = await authenticateUser(
      testData.validUser.userName,
      testData.validUser.password,
      { request }
    );
    await createEntity(Data, accessToken, "/contacts", { request });
    page.reload();
    await contact.viewContact(Data.firstName,Data.lastName);
    await contact.contactEdit(contactTestData.contactEdit.firstName,contactTestData.contactEdit.lastName);
    await contact.validateContactCreated(
      contactTestData.contactEdit.firstName,
      contactTestData.contactEdit.lastName
    );
    const id=await getEntity(accessToken,'/contacts','200',{request});
    await deleteEntity(accessToken,'/contacts/${id}',{request});
    await validateEntity(accessToken,'/contacts/${id}','404',{requewst});
    
  });
});

