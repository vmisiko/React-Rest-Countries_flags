import CountryDetail from "../Pages/CountryDetail";

describe("<Countries>", () => {
  it('Mounted CountryDetail', () => {
    cy.mount(<CountryDetail />);
    cy.contains('country');
  })
});