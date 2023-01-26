const { loginPage } = require("../pages/LoginPage");

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
/// <reference types= "cypress" />

describe("Testing the login page", () => {
  it("LP-01", () => {
    loginPage.logInUser();
  });

  it("LP-02", () => {
    loginPage.logOutUser();
  });

  it("LP-03", () => {
    loginPage.tryInvalidUsername();
  });

  it("LP-04", () => {
    loginPage.tryInvalidPassword();
  });

  it("LP-05", () => {
    loginPage.tryBlankInput();
  });

  it("LP-06", () => {
    loginPage.tryCaseSensitiveUsername();
  });

  it("LP-07", () => {
    loginPage.tryCaseSensitivePassword();
  });

  it("LP-08", () => {
    loginPage.trySpecialCharactersUsername();
  });

  it("LP-09", () => {
    loginPage.tryLongString();
  });

  it("LP-10", () => {
    loginPage.checkForgotYourPassword();
  });

  it("LP-11", () => {
    loginPage.checkPasswordIsMasked();
  });

  it("LP-12", () => {
    loginPage.checkOrangeHRM();
  });

  it("LP-13", () => {
    loginPage.checkSocialMediaLinks();
  });
});
