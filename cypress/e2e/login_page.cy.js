const { loginPage } = require("../pages/LoginPage");

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
/// <reference types= "cypress" />

describe("Testing the login page", () => {
  // NOTE LP-01
  it.only("LP-01: Verify that the user is able to login successfully with a valid username and valid password.", () => {
    loginPage.logInUser();
  });

  // NOTE LP-02
  it.only("LP-02: Verify that the user is able to logout successfully.", () => {
    loginPage.logOutUser();
  });

  // NOTE LP-03
  it("LP-03: Verify that the user is unable to login with an invalid username and valid password.", () => {
    cy.login("username", "admin123");
    cy.get('[role="alert"]').should("be.visible");
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  // NOTE LP-04
  it("LP-04: Verify that the user is unable to login with a valid username and invalid password.", () => {
    cy.login("Admin", "pass123");
    cy.get('[role="alert"]').should("be.visible");
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  //NOTE LP-5
  it("LP-05: Verify that the user is unable to login with blank input fields.", () => {
    cy.visit("/");
    cy.get("button[type='submit']").click();
    cy.get(".oxd-input-group__message").should("be.visible");
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(".oxd-input--error").should(
      "have.css",
      "border",
      "1px solid rgb(235, 9, 16)"
    );
  });

  //NOTE LP-6
  it("LP-06: Verify that the user is unable to login with correct username/password, but with incorrect case on username.", () => {
    cy.login("admin", "admin123");
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[role="alert"]').should("be.visible");
  });

  //NOTE LP-07
  it("LP-07: Verify that the user is unable to login with correct username/password, but with incorrect case on password.", () => {
    cy.login("Admin", "Admin123");
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[role="alert"]').should("be.visible");
  });

  //NOTE LP-08
  it("LP-08: Verify that the user is unable to login with special characters.", () => {
    cy.login("@dmin", "admin123");
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[role="alert"]').should("be.visible");
  });

  //NOTE LP-09
  it("LP-09: Verify that the user is unable to login with special characters.", () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;':\",.<>/?`~";
    let randomString = "";
    for (let i = 0; i < 100; i++) {
      // Generate a random number between 0 and characters.length-1
      let randomNumber = Math.floor(Math.random() * characters.length);
      // Add the character at the random index to the string
      randomString += characters[randomNumber];
    }
    console.log(randomString);

    cy.login(randomString, "admin123");
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[role="alert"]').should("be.visible");
  });
});
