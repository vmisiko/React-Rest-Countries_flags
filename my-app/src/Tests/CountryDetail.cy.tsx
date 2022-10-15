import CountryDetail from "../Pages/CountryDetail";

describe("<CountryDetail>", () => {
  beforeEach(() => {
    cy.mount(<CountryDetail />);
  });

  it('Mounted CountryDetail', () => {
    cy.contains('Back');
  })

  it('Test back button', () => {
    const currentUrl = cy.url();
    cy.get('#back').click();
    cy.url().should('not.eq', currentUrl);
  });

  it('Test if flag image has loaded', () => {
    cy.get('#flag')
    .should('be.visible')
    .and('have.prop', 'naturalWidth')
    .should('be.greaterThan', 0)
  });

  it('Test Border countries button changes url when clicked', () => {
    const currentUrl1 = cy.url();
    cy.get('#border1').click();
    cy.url().should('not.eq', currentUrl1);
    const currentUrl2 = cy.url();
    cy.get('#border2').click();
    cy.url().should('not.eq', currentUrl2);
    const currentUrl3 = cy.url();
    cy.get('#border3').click();
    cy.url().should('not.eq', currentUrl3);
  });

});