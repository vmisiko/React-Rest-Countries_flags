import SearchByCountry from "../../Pages/Countries/SearchByCountry";

describe("<Header>", () => {
  beforeEach(() => {
    cy.mount(<SearchByCountry />);
  });

  it('Mounted Header', () => {
    cy.contains('search for a country');
  });

  it('Search country request sent', () => {
    cy.get("#search-country").type('kenya{enter}');
  });
});