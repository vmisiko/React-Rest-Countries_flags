import CountryCard from "../../Pages/Countries/Components/CountryCard";

describe("<CountryCard>", () => {
  beforeEach(() => {
    cy.mount(<CountryCard />);
  });

  it('Mounted CountryCard', () => {
    cy.contains('Population');
    cy.contains('Region');
    cy.contains('Capital');
  });
});