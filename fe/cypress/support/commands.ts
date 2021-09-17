// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
// declare namespace Cypress {
//   interface Chainable<Subject = any> {
//     customCommand(param: any): typeof customCommand;
//   }
// }
//
// function customCommand(param: any): void {
//   console.warn(param);
// }
//
// NOTE: You can use it like so:
// Cypress.Commands.add('customCommand', customCommand);
//
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
import { environment } from '../../src/environments/environment';
Cypress.Commands.add('login', (email, password) => {
    cy.visit('/');
    cy.contains('Demo Cypress | Hello, Visitor');
    cy.get('form').within((form) => {
        cy.get('input[formControlName="email"]').type(email);
        cy.get('input[formControlName="email"]').should('have.value', email);
        cy.get('input[formControlName="password"]').type(password);
        cy.get('input[formControlName="password"]').should('have.value', password);
        cy.get('button').contains('Login').click();
    });

    cy.request({method: 'POST', url: environment.baseUrl + '/api/auth/login', body: {email,  password}}).as('login-app');
    cy.get('@login-app').should((response) => {
        Cypress.env('login', response['body']);
        expect(response['status']).to.equal(201);
        expect(response['body'].user.email).equal(email);
    });
 });
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
