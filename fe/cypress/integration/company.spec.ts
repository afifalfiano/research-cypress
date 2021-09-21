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

    afterEach(() => {
        cy.wait(3000);
        // cy.logout('afifalfiano2@gmail.com');
    });
  });