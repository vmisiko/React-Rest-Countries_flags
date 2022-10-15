import SearchByRegion from "../../Pages/Countries/SearchByRegion";

describe("<SearchByRegion>", () => {
  beforeEach(() => {
    cy.mount(<SearchByRegion />);
  });

  it('Mounted SearchByRegion', () => {
    cy.contains('Filter by region');
  });

  it('Search region request sent', () => {
    cy.get("#search-region").type('kenya{enter}');
    cy.get('#dropdown').select('Kenya');
  });
});