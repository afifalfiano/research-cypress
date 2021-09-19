import { environment } from 'src/environments/environment';

describe('Company Test', () => {
    beforeEach(() => {
        cy.login('afifalfiano2@gmail.com', 'Admin12345');
        cy.get('a').contains('Companies').click();
        cy.get('h1').contains('Companies');
        const token = Cypress.env('login');
        if (token !== undefined) {
            // tslint:disable-next-line:max-line-length
            cy.request({method: 'GET', url: environment.baseUrl + '/api/company', body: {}, headers: {Authorization: `bearer ${ token.access_token }`}}).as('company-list');
            cy.get('@company-list').should((response) => {
                // tslint:disable-next-line:no-string-literal
                expect(response['status']).to.equal(200);
            });
        }
    });

    it('Create new company', () => {
        cy.get('button').contains('Tambah').click();
        cy.get('mat-dialog-container');
        cy.wait(1000);
        cy.get('form').within((form) => {
            cy.get('input[formControlName="company_name"]').type('UII');
            cy.get('input[formControlName="company_name"]').should('have.value', 'UII');
        });
        cy.get('button').contains('Save').click(-50, -50, { force: true });
        cy.get('a').contains('Companies').click();
        cy.wait(1000);
        cy.get('table').children('tbody').get('tr').last().as('new-company');
        cy.get('@new-company').contains('td', 'UII');
    });

    it('Update company', () => {
        cy.get('table').children('tbody').get('tr').last().as('new-company');
        cy.get('@new-company').contains('td', 'UII');
        // tslint:disable-next-line:max-line-length
        cy.get('@new-company').children('td').children('div').should('have.class', 'action').children('button').contains('mat-icon', 'edit').click();
        cy.wait(1000);
        cy.get('form').within((form) => {
            cy.get('input[formControlName="company_name"]').clear();
            cy.get('input[formControlName="company_name"]').type('UII Jakal');
            cy.get('input[formControlName="company_name"]').should('have.value', 'UII Jakal');
        });
        cy.get('button').contains('Save').click(-50, -50, { force: true });
        cy.get('a').contains('Companies').click();
        cy.wait(1000);
        cy.get('table').children('tbody').get('tr').last().as('new-company');
        cy.get('@new-company').contains('td', 'UII Jakal');
    });
    it('Delete company', () => {
        cy.get('table').children('tbody').get('tr').last().as('new-company');
        cy.get('@new-company').contains('td', 'UII Jakal');
        // tslint:disable-next-line:max-line-length
        cy.get('@new-company').children('td').children('div').should('have.class', 'action').children('button').contains('mat-icon', 'delete').click();
        cy.get('mat-dialog-container').contains('Yes').click(-50, -50, { force: true });
        cy.get('a').contains('Companies').click();
        cy.wait(1000);
        cy.get('table').children('tbody').get('tr').last().children('td').should('not.contain.value', 'UII Jakal');
    });

    afterEach(() => {
        cy.wait(5000);
        // cy.logout('afifalfiano2@gmail.com');
    });
  });