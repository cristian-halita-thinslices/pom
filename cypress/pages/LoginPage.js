import { input, selector } from "../support/data";

export class LoginPage {
  // It visits the site
  visitOrangeHRM() {
    cy.visit("/");
  }

  // It login the user
  logInUser() {
    cy.login(input.ValidUsername, input.ValidPassword);
    cy.url().should("include", "dashboard/index");
  }

  // It logout the user
  logOutUser() {
    this.logInUser();
    cy.get(selector.UserProfileDropdown).click();
    cy.get(selector.UserProfileDropdownItem).last().click();
    this.assertUserIsLoggedOut();
  }

  // It tryes to login with invalid user
  tryInvalidUsername() {
    cy.login(input.InvalidUsername, input.ValidPassword);
    cy.get(selector.ErrorInvalidCredentials).should("be.visible");
    this.assertUserIsLoggedOut();
  }

  // It tryes to login with invalid password
  tryInvalidPassword() {
    cy.login(input.ValidUsername, input.InvalidPassword);
    cy.get(selector.ErrorInvalidCredentials).should("be.visible");
    this.assertUserIsLoggedOut();
  }

  // It tryes to login with case sensitive username
  tryCaseSensitiveUsername() {
    cy.login(input.CaseSensitiveUsername, input.ValidPassword);
    cy.get(selector.ErrorInvalidCredentials).should("be.visible");
    this.assertUserIsLoggedOut();
  }

  // It tryes to login with case sensitive password
  tryCaseSensitivePassword() {
    cy.login(input.ValidUsername, input.CaseSensitivePassword);
    cy.get(selector.ErrorInvalidCredentials).should("be.visible");
    this.assertUserIsLoggedOut();
  }

  // It tryes to login with special characters
  trySpecialCharactersUsername() {
    cy.login(input.SpecialCharactersUsername, input.ValidPassword);
    cy.get(selector.ErrorInvalidCredentials).should("be.visible");
    this.assertUserIsLoggedOut();
  }

  // It tryes to login with long string username
  tryLongString() {
    cy.login(input.LongString, input.ValidPassword);
    cy.get(selector.ErrorInvalidCredentials).should("be.visible");
    this.assertUserIsLoggedOut();
  }

  // It tryes to login with blank input
  tryBlankInput() {
    cy.visit("/");
    cy.get(selector.LoginButton).click();
    cy.get(selector.ErrorRequired).should("be.visible");
    cy.get(selector.InputBorder).should(
      "have.css",
      "border",
      "1px solid rgb(235, 9, 16)"
    );
    this.assertUserIsLoggedOut();
  }

  // It asserts URL is unchanged if login fails
  assertUserIsLoggedOut() {
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }

  // It checks the forgotten password link
  checkForgotYourPassword() {
    cy.visit("/");
    cy.get(selector.ForgotPassword).click();
    cy.url().should("include", "/requestPasswordResetCode");
    cy.contains("Reset Password");
  }

  // It checks the OrangeHRM link

  checkOrangeHRM() {
    cy.visit("/");
    cy.get(selector.OrangeHRM)
      .should("have.attr", "target", "_blank")
      .should("have.attr", "href", "http://www.orangehrm.com");
  }

  // It checks the social media links

  checkSocialMediaLinks() {
    cy.visit("/");
    //1st
    cy.get(selector.SocialMediaIcons)
      .children()
      .first()
      .should("have.attr", "target", "_blank")
      .should(
        "have.attr",
        "href",
        "https://www.linkedin.com/company/orangehrm/mycompany/"
      );

    //2nd
    cy.get(selector.SocialMediaIcons)
      .children()
      .first()
      .next()
      .should("have.attr", "target", "_blank")
      .should("have.attr", "href", "https://www.facebook.com/OrangeHRM/");

    //3nd
    cy.get(selector.SocialMediaIcons)
      .children()
      .first()
      .next()
      .next()
      .should("have.attr", "target", "_blank")
      .should("have.attr", "href", "https://twitter.com/orangehrm?lang=en");

    //4th
    cy.get(selector.SocialMediaIcons)
      .children()
      .first()
      .next()
      .next()
      .next()
      .should("have.attr", "target", "_blank")
      .should("have.attr", "href", "https://www.youtube.com/c/OrangeHRMInc");
  }
  // It checks if the password is masked
  checkPasswordIsMasked() {
    cy.visit("/");
    cy.get(selector.PasswordField).type(input.ValidPassword);
    cy.get(selector.PasswordField).should("have.attr", "type", "password");
  }
}

export const loginPage = new LoginPage();
