import { Provider } from 'react-redux';
import { store } from 'Store/index';

import LanguageButton from './LanguageButton';

describe('<LanguageButton />', () => {
  it('renders', () => {
    const open = true;
    cy.mount(
      <Provider store={store}>
        <LanguageButton open={open} />
      </Provider>,
    );
    cy.get('#language-selector').should('exist');
  });

  it('should display ArrowDropDownIcon when open is false', () => {
    const open = false;
    cy.mount(
      <Provider store={store}>
        <LanguageButton open={open} />
      </Provider>,
    );
    cy.get('#language-selector').should('exist');
    cy.get('[data-testid="ArrowDropDownIcon"]').should('be.visible');
    cy.get('[data-testid="ArrowDropUpIcon"]').should('not.exist');
  });

  it('should display ArrowDropUpIcon when open is true', () => {
    const open = true;
    cy.mount(
      <Provider store={store}>
        <LanguageButton open={open} />
      </Provider>,
    );
    cy.get('#language-selector').should('exist');
    cy.get('[data-testid="ArrowDropDownIcon"]').should('not.exist');
    cy.get('[data-testid="ArrowDropUpIcon"]').should('be.visible');
  });

  it('should contain PL language', () => {
    const open = true;
    cy.mount(
      <Provider store={store}>
        <LanguageButton open={open} />
      </Provider>,
    );
    cy.get('#language-selector').should('exist');
    cy.get('#language-selector').find('span').should('exist').contains('PL');
  });
});
