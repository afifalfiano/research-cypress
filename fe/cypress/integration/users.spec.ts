import { environment } from 'src/environments/environment';

describe('Users Test', () => {
    beforeEach(() => {
        cy.login('afifalfiano2@gmail.com', 'Admin12345');
        cy.get('h1').contains('Users');
        const token = Cypress.env('login');
        if (token !== undefined) {
            // tslint:disable-next-line:max-line-length
            cy.request({method: 'GET', url: environment.baseUrl + '/api/users', body: {}, headers: {Authorization: `bearer ${ token.access_token }`}}).as('user-list');
            cy.get('@user-list').should((response) => {
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