import App from './App';

describe('<APP>', () => {
  it('Mount app component', () => {
    cy.mount(<App />);
  });
});
