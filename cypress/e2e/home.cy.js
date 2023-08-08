/// <reference types="cypress" />

describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('displays two nav routes', () => {
    cy.get('#nav').should('exist');
    cy.get('#nav li').should('have.length', 2);

    cy.get('#nav li')
      .first()
      .should('have.text', 'Start')
      .click()
      .find('a')
      .should('have.class', 'active');
    cy.url().should('eq', 'http://localhost:3000/');

    cy.get('#nav li')
      .last()
      .should('have.text', 'Dane')
      .click()
      .find('a')
      .should('have.class', 'active');
    cy.url().should('eq', 'http://localhost:3000/data');
  });

  it('can change language', () => {
    cy.get('#language-menu').should('exist');

    // GB test
    cy.get('#language-selector').trigger('mouseover');
    cy.get('#language-list').should('exist');
    cy.get('#language-list #GB').should('exist').click();
    cy.get('#language-selector span').should('exist').contains('GB');
    cy.get('#nav li').first().should('have.text', 'Home');
    cy.get('#nav li').last().should('have.text', 'Data');

    // PL test
    cy.get('#language-selector').trigger('mouseover');
    cy.get('#language-list').should('exist');
    cy.get('#language-list #PL').should('exist').click();
    cy.get('#language-selector span').should('exist').contains('PL');
    cy.get('#nav li').first().should('have.text', 'Start');
    cy.get('#nav li').last().should('have.text', 'Dane');
  });

  it('displays two tabpanels', () => {
    cy.get('div[aria-label="Data Tabs"]').should('exist');
    cy.get('div[aria-label="Data Tabs"]')
      .find('button')
      .should('have.length', 2);
    cy.get('div[aria-label="Data Tabs"]')
      .find('button')
      .first()
      .should('have.text', 'Formularz na dane')
      .click()
      .should(($element) => {
        expect($element).to.have.attr('role', 'tab');
        expect($element).to.have.attr('aria-selected', 'true');
      });
    cy.get('div[aria-label="Data Tabs"]')
      .find('button')
      .last()
      .should('have.text', 'Tabela z danymi')
      .click()
      .should(($element) => {
        expect($element).to.have.attr('role', 'tab');
        expect($element).to.have.attr('aria-selected', 'true');
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

      cy.get('#data-form')
        .find('#firstname')
        .should('exist')
        .type(testPersonData.firstname);
      cy.get('#data-form')
        .find('#surname')
        .should('exist')
        .type(testPersonData.surname);
      cy.get('#data-form')
        .find('#date_of_birth')
        .should('exist')
        .type(testPersonData.date_of_birth);
      cy.get('#data-form')
        .find('#about_you')
        .should('exist')
        .type(testPersonData.about_you);
      cy.get('#data-form')
        .find('button[type="submit"]')
        .should('exist')
        .click();
    });

    it('displays added data', () => {
      cy.get('#full-width-tabpanel-1').click();
      cy.get('tbody').should('exist');
      cy.get('tbody tr').should('have.length.at.least', 1);
      cy.get('tbody tr>th input[type="checkbox"]').check().should('be.checked');
      cy.get('tbody tr>th input[type="checkbox"]')
        .uncheck()
        .should('not.be.checked');
      cy.get('tbody tr>td#id').should('not.be.empty');
      cy.get('tbody tr>td#firstname').should('have.text', 'John');
      cy.get('tbody tr>td#surname').should('have.text', 'Doe');
      cy.get('tbody tr>td#date_of_birth').should('have.text', '1999-03-11');
      cy.get('tbody tr>td#about_you').should('have.text', 'I like pro...');
    });

    it('can delete data', () => {
      cy.get('#full-width-tabpanel-1').click();
      cy.get('tbody').should('exist');
      cy.get('tbody tr').should('have.length.at.least', 1);
      cy.get('tbody tr>th input[type="checkbox"]').check().should('be.checked');
      cy.get('button[aria-label="Usuń"]').should('exist').click();
      cy.get('tbody tr>td#no-data').should(
        'have.text',
        'Nie znaleziono danych',
      );
    });
  });
});
