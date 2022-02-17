const data = require('../fixtures/data.json');

describe('Sorting data grid', () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get('#root', {timeout: 10000 }).should('be.visible');
    });

    it('Validating row values by Size A-Z', () => {
      data.sort(function(a, b) {
        return(a.size - b.size)
      });
        cy.get('thead > tr > :nth-child(4)').click();
        cy.get('thead > tr > :nth-child(4)').should('have.text', 'Size (A-Z)');

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
   
    it('Validating row values by Size Z-A', () => {
      data.sort(function(a, b) {
        return(b.size - a.size)
      });
        cy.get('thead > tr > :nth-child(4)').dblclick();
        cy.get('thead > tr > :nth-child(4)').should('have.text', 'Size (Z-A)');

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



