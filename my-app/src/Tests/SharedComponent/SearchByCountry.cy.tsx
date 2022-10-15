import SearchByCOuntry from "../../SharedComponents/SearchByCOuntry";

describe("<Header>", () => {
  beforeEach(() => {
    cy.mount(<SearchByCOuntry />);
  });

  it('Mounted Header', () => {
    cy.contains('search for a country');
  });

  it('Search country request sent', () => {
    cy.get("#search").type('kenya{enter}');
    cy.get('#dropdown').select('Kenya');
  });
});