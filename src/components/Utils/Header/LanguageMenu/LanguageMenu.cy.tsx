import { Provider } from 'react-redux';
import { store } from 'Store/index';

import LanguageMenu from './LanguageMenu';

describe('<LanguageMenu />', () => {
  it('renders', () => {
    cy.mount(
      <Provider store={store}>
        <LanguageMenu />
      </Provider>,
    );
    cy.get('#language-menu').should('exist');
    cy.get('#language-selector').should('exist').trigger('mouseover');
    cy.get('#language-list').should('exist');
    cy.get('#GB').should('exist').click();
    cy.get('#language-selector').find('span').should('exist').contains('GB');
    cy.get('#language-selector').should('exist').trigger('mouseover');
    cy.get('#language-list').should('exist');
    cy.get('#PL').should('exist').click();
    cy.get('#language-selector').find('span').should('exist').contains('PL');
  });
});
