import { environment } from 'src/environments/environment';

describe('Register Account', () => {
    beforeEach(() => {
        cy.visit('/');
    });


    afterEach(() => {
        cy.wait(3000);
        // cy.logout('afifalfiano2@gmail.com');
    });
  });