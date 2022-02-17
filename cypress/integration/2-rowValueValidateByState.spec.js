const data = require('../fixtures/data.json');

describe('Sorting data grid', () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get('#root', {timeout: 10000 }).should('be.visible');
    });

    it('Validating row values by State A-Z', () => {
      data.sort(function(a, b) {
        if(a.state < b.state) {
          return -1;
        } else {
          return true
        }
    });
    cy.get('thead > tr > :nth-child(1)').click();
    cy.get('thead > tr > :nth-child(1)').should('have.text', 'State (A-Z)');

    for(let i = 0; i < data.length;i++){
      const formatPopulation = new Intl.NumberFormat('en-US').format(data[i].population);
      const formatSize = new Intl.NumberFormat('en-US').format(data[i].size);

    cy.get(`tbody > :nth-child(${i+1}) > :nth-child(1)`).should('have.text', data[i].state);
    cy.get(`tbody > :nth-child(${i+1}) > :nth-child(2)`).should('have.text', data[i].abbreviation);
    cy.get(`tbody > :nth-child(${i+1}) > :nth-child(3)`).should('have.text', formatPopulation);
    cy.get(`tbody > :nth-child(${i+1}) > :nth-child(4)`).should('have.text', formatSize);
    cy.get(`tbody > :nth-child(${i+1}) > :nth-child(5)`).should('be.have', data[i].flag);
    }
});
   
    it('Validating row values by State Z-A', () => {
      data.sort(function(a, b) {
        if(a.state > b.state) {
          return -1;
        } else {
          return true
        }
    });
    cy.get('thead > tr > :nth-child(1)').dblclick();
    cy.get('thead > tr > :nth-child(1)').should('have.text', 'State (Z-A)');

    for(let i = 0; i < data.length;i++){
      const formatPopulation = new Intl.NumberFormat('en-US').format(data[i].population);
      const formatSize = new Intl.NumberFormat('en-US').format(data[i].size);

    cy.get(`tbody > :nth-child(${i+1}) > :nth-child(1)`).should('have.text', data[i].state);
    cy.get(`tbody > :nth-child(${i+1}) > :nth-child(2)`).should('have.text', data[i].abbreviation);
    cy.get(`tbody > :nth-child(${i+1}) > :nth-child(3)`).should('have.text', formatPopulation);
    cy.get(`tbody > :nth-child(${i+1}) > :nth-child(4)`).should('have.text', formatSize);
    cy.get(`tbody > :nth-child(${i+1}) > :nth-child(5)`).should('be.have', data[i].flag);
    }
  });
})



