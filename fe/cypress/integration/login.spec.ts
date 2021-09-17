import { environment } from 'src/environments/environment';

describe('Login Apps', () => {
    beforeEach(() => {
        cy.login('afifalfiano2@gmail.com', 'Admin12345');
        cy.wait(5000);
    });
    it('Visits the Users List', () => {
        cy.get('h1').contains('Users');
        const token = Cypress.env('login');
        if (token !== undefined) {
            // tslint:disable-next-line:max-line-length
            cy.request({method: 'GET', url: environment.baseUrl + '/api/users', body: {}, headers: {Authorization: `bearer ${ token.access_token }`}}).as('user-list');
            cy.get('@user-list').should((response) => {
                expect(response['status']).to.equal(200);
            });
        }
    });

    it('Create new user', () => {
        cy.get('button').contains('Tambah').click();
        let i = 1;
        cy.get('form').within((form) => {
            cy.get('input[formControlName="firstName"]').type('Alfiano');
            cy.get('input[formControlName="firstName"]').should('have.value', 'Alfiano');
            cy.get('input[formControlName="lastName"]').type('Hermasyah');
            cy.get('input[formControlName="lastName"]').should('have.value', 'Hermasyah');
            cy.get('input[formControlName="email"]').type('afifalfiano' + i + '@gmail.com');
            cy.get('input[formControlName="email"]').should('have.value', 'afifalfiano' + i + '@gmail.com');
            cy.get('input[formControlName="phone"]').type('0812312313');
            cy.get('input[formControlName="phone"]').should('have.value', '0812312313');
            cy.get('input[formControlName="city"]').type('Yogyakarta');
            cy.get('input[formControlName="city"]').should('have.value', 'Yogyakarta');
            cy.get('input[formControlName="country"]').type('Indonesia');
            cy.get('input[formControlName="country"]').should('have.value', 'Indonesia');
            cy.get('mat-select[formControlName="company"]').click().as('company');
        });
        cy.get('@company').get('mat-option').contains('BSI').click();
        cy.get('mat-select[formControlName="company"]');
        cy.get('button').contains('Submit').click();
        // tslint:disable-next-line:max-line-length
        // const token = Cypress.env('login');
        // if (token !== undefined) {
        //     const body = {
        //         city: 'Yogyakarta',
        //         company: '1',
        //         country: 'Indonesia',
        //         email: 'afifalfiano3@gmail.com',
        //         firstName: 'Alfiano',
        //         jwt_token: null,
        //         lastName: 'Hermasyah',
        //         password: 'Admin12345',
        //         phone: '0812312313',
        //     };
        //     // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:max-line-length
        //     cy.request({method: 'POST', url: environment.baseUrl + '/api/users', body, headers: {Authorization: `bearer ${ token.access_token }`}}).as('new-user');
        // }
});

    after(() => {
        cy.wait(5000);
        // cy.logout('afifalfiano2@gmail.com');
    });
  });