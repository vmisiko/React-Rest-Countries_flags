import CountryDetail from "../Pages/CountryDetail";
import {BrowserRouter as Router} from 'react-router-dom';

describe("<CountryDetail>", () => {
  beforeEach(() => {
    cy.mount(<Router><CountryDetail /></Router>);
  });

  it('Mounted CountryDetail', () => {
    cy.contains('Back');
  })

  it('Test back button', () => {
    const currentUrl = cy.url();
    cy.get('#back').click();
    cy.url().should('not.eq', currentUrl);
  });
});