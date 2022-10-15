import Countries from "../Pages/Countries";

describe("<Countries>", () => {
  beforeEach(() => {
    cy.mount(<Countries />);
  });
  it('Mounted Countries', () => {
    cy.contains('countries');
  });
  it('Fetch all countries', () => {
    cy.request({
      method: 'GET',
      url: 'https://restcountries.com/v3.1/all',
    }).then(($response) => {
      expect($response.status).to.eq(200);
    });
  });

  it('Filter By country', () => {
    const country = 'kenya';
    cy.request({
      method: 'GET',
      url: `https://restcountries.com/v3.1/name/${country}`,
    }).then(($response) => {
      expect($response.status).to.eq(200);
    });
  });

  it('Filter By Region', () => {
    const region = "AU"
    cy.request({
      method: 'GET',
      url: `https://restcountries.com/v3.1/regionalbloc/{region}`,
    }).then(($response) => {
      expect($response.status).to.eq(200);
    });
  });
});