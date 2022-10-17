import SearchByRegion from "../../Pages/Countries/SearchByRegion";

describe("<SearchByRegion>", () => {
  beforeEach(() => {
    cy.mount(<SearchByRegion onChange={change}/>);
    function change(e: any) {
      console.log(e);
    }
  });

  it('Mounted SearchByRegion', () => {
    cy.contains('Filter by Region');
  });

  it('Search region request sent', () => {
    cy.get("#search-region").type('Americas{enter}');
  });
});