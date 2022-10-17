import Countries from "../Pages/Countries";
import {BrowserRouter as Router} from 'react-router-dom';

describe("<Countries>", () => {
  beforeEach(() => {
    cy.mount(<Router><Countries /> </Router>);
  });
  it('Mounted Countries', () => {
    cy.contains('Search for a country');
    cy.contains('Filter by Region');
  });
  it('Fetch all countries', () => {
    cy.request({
      method: 'GET',
      url: 'https://restcountries.com/v3.1/all',
    }).then(($response) => {
      expect($response.status).to.eq(200);
    });
  });

  it('Filter By country', () => {
    const country = 'kenya';
    cy.get("#search-country").type(`${country}{enter}`);
    cy.get('#countries').should('be.visible');
  });

  it('Filter By Region', () => {
    const region = "Africa"
    cy.get("#search-region").type('Americas{enter}');
    cy.get('#countries').should('be.visible');
  });
});