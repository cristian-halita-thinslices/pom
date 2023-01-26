// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add("login", (email, pw) => {
//   cy.visit("/");
//   cy.get("[name='username']").clear().type(email);
//   cy.get("[name='password']").clear().type(pw);
//   cy.get("button[type='submit']").click();
//   cy.url().should("include", "dashboard/index");
// });
const registerCypressGrep = require("@cypress/grep");
registerCypressGrep();

Cypress.Commands.add(
  "login",
  (username, password) => {
    cy.visit("/");
    cy.get("[name='username']")
      .clear()
      .type(username, { parseSpecialCharSequences: false });
    cy.get("[name='password']").clear().type(password);
    cy.get("button[type='submit']").click();
  },
  {
    validate() {
      cy.request("/").its("status").should("eq", 200);
    },
  }
);
