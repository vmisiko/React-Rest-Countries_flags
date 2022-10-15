import CountryCard from "../../Pages/Countries/CountryCard";

describe("<CountryCard>", () => {
  beforeEach(() => {
    const country = {
      name: 'Kenay',
      population: 200000,
    }
    cy.mount(<CountryCard country={country} />);
  });

  it('Mounted CountryCard', () => {
    cy.contains('Population');
    cy.contains('Region');
    cy.contains('Capital');
  });
});