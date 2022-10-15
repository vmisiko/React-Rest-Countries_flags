import Countries from "../Pages/Countries";

describe("<Countries>", () => {
  it('Mounted Countries', () => {
    cy.mount(<Countries />);
    cy.contains('countries');
  })
});