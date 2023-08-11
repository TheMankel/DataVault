/// <reference types="cypress" />

// for (let i = 0; i < 10; i++) {
describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('displays two nav routes', () => {
    const routes = [
      { label: 'Start', url: '/' },
      { label: 'Dane', url: '/data' },
    ];

    cy.get('#nav').should('exist');

    routes.forEach((route) => {
      cy.get('#nav li')
        .should('have.length', 2)
        .contains(route.label)
        .click()
        .should('have.class', 'active');
      cy.url().should('eq', `http://localhost:3000${route.url}`);
    });
  });

  it('can change language', () => {
    const languageTests = [
      { lang: 'GB', homeText: 'Home', dataText: 'Data' },
      { lang: 'PL', homeText: 'Start', dataText: 'Dane' },
    ];

    cy.get('#language-menu').should('exist');

    languageTests.forEach((test) => {
      cy.get('#language-selector').trigger('mouseover');
      cy.get('#language-list').should('exist');
      cy.get(`#language-list #${test.lang}`).should('exist').click();
      cy.get('#language-selector span').should('exist').contains(test.lang);
      cy.get('#nav li').first().should('have.text', test.homeText);
      cy.get('#nav li').last().should('have.text', test.dataText);
    });
  });

  it('displays two tabpanels', () => {
    const tabLabels = ['Formularz na dane', 'Tabela z danymi'];

    cy.get('div[aria-label="Data Tabs"]').within(() => {
      cy.get('button')
        .should('have.length', 2)
        .each(($tabButton, index) => {
          cy.wrap($tabButton)
            .should('have.text', tabLabels[index])
            .click()
            .should('have.attr', 'role', 'tab')
            .should('have.attr', 'aria-selected', 'true');
        });
    });
  });

  context('form crud operations', () => {
    beforeEach(() => {
      const testPersonData = {
        firstname: 'John',
        surname: 'Doe',
        date_of_birth: '1999-03-11',
        about_you: 'I like programming',
      };

      cy.get('#data-form').within(() => {
        cy.get('#firstname').should('exist').type(testPersonData.firstname);
        cy.get('#surname').should('exist').type(testPersonData.surname);
        cy.get('#date_of_birth')
          .should('exist')
          .type(testPersonData.date_of_birth);
        cy.get('#about_you').should('exist').type(testPersonData.about_you);
        cy.get('button[type="submit"]').should('exist').click();
      });
    });

    it('displays added data', () => {
      const testPersonData = {
        firstname: 'John',
        surname: 'Doe',
        date_of_birth: '1999-03-11',
        about_you: 'I like programming',
      };

      cy.get('#full-width-tabpanel-1').click();
      cy.get('tbody')
        .should('exist')
        .find('tr')
        .should('have.length.at.least', 1)
        .find('th input[type="checkbox"]')
        .check()
        .should('be.checked')
        .uncheck()
        .should('not.be.checked');

      cy.get('tbody tr').within(() => {
        cy.get('td#id').should('not.be.empty');
        cy.get('td#firstname').should('have.text', testPersonData.firstname);
        cy.get('td#surname').should('have.text', testPersonData.surname);
        cy.get('td#date_of_birth').should(
          'have.text',
          testPersonData.date_of_birth,
        );
        cy.get('td#about_you').should(
          'have.text',
          `${testPersonData.about_you.substring(0, 10)}...`,
        );
      });
    });

    it('can delete data', () => {
      cy.get('#full-width-tabpanel-1').click();
      cy.get('tbody')
        .should('exist')
        .find('tr')
        .should('have.length.at.least', 1)
        .find('th input[type="checkbox"]')
        .check()
        .should('be.checked');
      cy.get('button[aria-label="Usuń"]').should('exist').click();
      cy.get('tbody tr>td#no-data').should(
        'have.text',
        'Nie znaleziono danych',
      );
    });

    it('can edit data', () => {
      const editedPersonData = {
        firstname: 'Jane',
        surname: 'Smith',
        date_of_birth: '1959-09-03', // Hi barbie
        about_you: 'I like dolls',
      };

      cy.get('#full-width-tabpanel-1').click();
      cy.get('tbody')
        .should('exist')
        .find('tr')
        .should('have.length.at.least', 1)
        .find('th input[type="checkbox"]')
        .check()
        .should('be.checked');

      cy.get('[aria-label="Edytuj"]').should('exist').click();
      cy.get('#data-form').within(() => {
        cy.get('#firstname')
          .should('exist')
          .clear()
          .type(editedPersonData.firstname);
        cy.get('#surname')
          .should('exist')
          .clear()
          .type(editedPersonData.surname);
        cy.get('#date_of_birth')
          .should('exist')
          .clear()
          .type(editedPersonData.date_of_birth);
        cy.get('#about_you')
          .should('exist')
          .clear()
          .type(editedPersonData.about_you);
        cy.get('button[type="submit"]').should('exist').click();
      });

      cy.get('#full-width-tabpanel-1').click();
      cy.get('tbody')
        .should('exist')
        .find('tr')
        .should('have.length.at.least', 1)
        .find('th input[type="checkbox"]')
        .check()
        .should('be.checked')
        .uncheck()
        .should('not.be.checked');

      cy.get('tbody tr').within(() => {
        cy.get('td#id').should('not.be.empty');
        cy.get('td#firstname').should('have.text', editedPersonData.firstname);
        cy.get('td#surname').should('have.text', editedPersonData.surname);
        cy.get('td#date_of_birth').should(
          'have.text',
          editedPersonData.date_of_birth,
        );
        cy.get('td#about_you').should(
          'have.text',
          `${editedPersonData.about_you.substring(0, 10)}...`,
        );
      });
    });
  });

  context('form filtering operations', () => {
    const testDataArray = [
      {
        firstname: 'Jane',
        surname: 'Smith',
        date_of_birth: '1959-09-03', // Hi barbie
        about_you: 'I like dolls',
      },
      {
        firstname: 'John',
        surname: 'Doe',
        date_of_birth: '1999-03-11',
        about_you: 'I like programming',
      },
    ];
    beforeEach(() => {
      testDataArray.forEach((testPersonData) => {
        cy.get('#data-form').within(() => {
          cy.get('#firstname').should('exist').type(testPersonData.firstname);
          cy.get('#surname').should('exist').type(testPersonData.surname);
          cy.get('#date_of_birth')
            .should('exist')
            .type(testPersonData.date_of_birth);
          cy.get('#about_you').should('exist').type(testPersonData.about_you);
          cy.get('button[type="submit"]').should('exist').click();
        });
      });

      cy.get('#full-width-tabpanel-1').click();
      cy.get('tbody').should('exist');
      cy.get('thead tr>th#firstname')
        .click()
        .should(($element) => {
          expect($element).to.have.attr('scope', 'col');
          expect($element).to.have.attr('aria-sort', 'ascending');
        });
    });

    it('displays added data', () => {
      cy.get('tbody tr').should('have.length.at.least', 2);
      cy.get('tbody tr>th input[type="checkbox"]').check().should('be.checked');
      cy.get('tbody tr>th input[type="checkbox"]')
        .uncheck()
        .should('not.be.checked');
      cy.get('tbody tr>td#id').should('not.be.empty');
      testDataArray.forEach((testPersonData, index) => {
        cy.get('tbody tr')
          .eq(index)
          .within(() => {
            cy.get('#firstname').should('contain', testPersonData.firstname);
            cy.get('#surname').should('contain', testPersonData.surname);
            cy.get('#date_of_birth').should(
              'contain',
              testPersonData.date_of_birth,
            );
            cy.get('#about_you').should(
              'contain',
              `${testPersonData.about_you.substring(0, 10)}...`,
            );
          });
      });
    });

    it('filters data by ID', () => {
      cy.get('#toolbar button[aria-label="Filtruj"').should('exist').click();
      cy.get('#filtering').should('exist');
      cy.get('#filtering button[aria-label="Close"]').should('exist').click();
      cy.get('#toolbar button[aria-label="Filtruj"').should('exist').click();
      cy.get('#filtering').should('exist');
      cy.get('#filtering #select-filter-column').should('exist').click();
      cy.get('#select-id').should('exist').click();
      cy.get('#filtering #filter-value')
        .should('exist')
        .type('test-id-not-found-nanoid');
      cy.get('tbody tr>td#no-data').should(
        'have.text',
        'Nie znaleziono danych',
      );
      cy.get('#filtering button[aria-label="Close"]').click();
      cy.get('tbody tr').should('have.length.at.least', 2);
    });

    it('filters data by Firstname', () => {
      const attributesToTest = [
        'firstname',
        'surname',
        'date_of_birth',
        'about_you',
      ];

      cy.get('#toolbar button[aria-label="Filtruj"').should('exist').click();
      cy.get('#filtering').should('exist');
      cy.get('#filtering button[aria-label="Close"]').should('exist').click();
      cy.get('#toolbar button[aria-label="Filtruj"').should('exist').click();
      cy.get('#filtering').should('exist');

      attributesToTest.forEach((attribute) => {
        cy.get('#filtering #select-filter-column').should('exist').click();
        cy.get(`#select-${attribute}`).should('exist').click();
        cy.get('#filtering #filter-value')
          .should('exist')
          .type(`test-${attribute}`);
        cy.get('tbody tr>td#no-data').should(
          'have.text',
          'Nie znaleziono danych',
        );
        testDataArray.forEach((testPersonData, index) => {
          cy.get('#filtering #filter-value')
            .should('exist')
            .clear()
            .type(testPersonData[attribute]);
          cy.get('tbody tr').within(() => {
            cy.get('#firstname').should('contain', testPersonData.firstname);
            cy.get('#surname').should('contain', testPersonData.surname);
            cy.get('#date_of_birth').should(
              'contain',
              testPersonData.date_of_birth,
            );
            cy.get('#about_you').should(
              'contain',
              `${testPersonData.about_you.substring(0, 10)}...`,
            );
          });
        });
      });

      cy.get('#filtering button[aria-label="Close"]').click();
      cy.get('tbody tr').should('have.length.at.least', 2);
    });
  });
});
// }
