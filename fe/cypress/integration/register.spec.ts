import { environment } from 'src/environments/environment';

describe('Register Account', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Register new account', () => {
        cy.get('button').contains('Register').click();
        cy.get('form').within(form => {
            cy.get('input[formControlName="firstName"]').type('Budi');
            cy.get('input[formControlName="lastName"]').type('Budiman');
            cy.get('input[formControlName="email"]').type('budi@gmail.com');
            cy.get('input[formControlName="password"]').type('Admin12345');
        });
        cy.get('button').contains('Register').click();
    });
    it('Login new account', () => {
        cy.login('budi@gmail.com', 'Admin12345');
    });

    afterEach(() => {
        cy.wait(5000);
        // cy.logout('afifalfiano2@gmail.com');
    });
  });