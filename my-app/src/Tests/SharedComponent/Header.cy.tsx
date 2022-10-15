import Header from "../../SharedComponents/Header";

describe("<Header>", () => {
  beforeEach(() => {
    cy.mount(<Header />);
  });

  it('Mmounted Header', () => {
    cy.contains('Where in the world');
  })
});