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
        cy.wait(5000);
    });

    it('Create new user', () => {
        cy.get('button').contains('Tambah').click();
        let i = 1;
        cy.get('form').within((form) => {
            cy.get('input[formControlName="photo_profile"]').attachFile('profile-create.jpeg');
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
        cy.wait(5000);
        cy.get('table').children('tbody').get('tr').last().as('new-input');
        cy.get('@new-input').contains('td', 'afifalfiano1@gmail.com');
    });

    it('Update user', () => {
        cy.get('table').children('tbody').get('tr').last().as('new-input');
        cy.get('@new-input').contains('td', 'afifalfiano1@gmail.com');
        // tslint:disable-next-line:max-line-length
        cy.get('@new-input').children('td').children('div').should('have.class', 'action').children('button').contains('mat-icon', 'edit').click();
        cy.get('input[formControlName="photo_profile"]').attachFile('profile-dummy.png');
        cy.get('button').contains('Submit').click();
        cy.get('img').each((img) => {
            console.log(img);
            // tslint:disable-next-line:no-string-literal
            if (img[0]['alt'] === 'profile-dummy.png') {
                cy.wrap(img).should('have.attr', 'alt');
            }
        });
    });
    it('Delete user', () => {
        cy.get('table').children('tbody').get('tr').last().as('new-input');
        cy.get('@new-input').contains('td', 'afifalfiano1@gmail.com');
        // tslint:disable-next-line:max-line-length
        cy.get('@new-input').children('td').children('div').should('have.class', 'action').children('button').contains('mat-icon', 'delete').click();
        cy.get('mat-dialog-container').contains('Yes').click();
        cy.get('table').children('tbody').get('tr').children('td').should('not.contain.value', 'afifalfiano1@gmail.com');
    });

    afterEach(() => {
        cy.wait(5000);
        // cy.logout('afifalfiano2@gmail.com');
    });
  }); 