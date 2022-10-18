import ErrorPage from "../Pages/ErrorPage";
import {BrowserRouter as Router} from 'react-router-dom';

describe("<ErrorPage>", () => {
  beforeEach(() => {
    cy.mount(<Router><ErrorPage /></Router>);
  });

  it('Mounted ErrorPage', () => {
    cy.contains('Refetch Countries');
  });

  it('Test Refresh Countries', () => {
    const currentUrl = cy.url();
    cy.get('#reload-countries').click();
    cy.url().should('not.eq', currentUrl);
  });
});