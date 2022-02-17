const data = require('../fixtures/data.json');

describe('Sorting data grid', () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it('Validating table collumms and rows', () => {
        cy.get('#root', {timeout: 10000 }).should('be.visible');
        cy.get('thead tr th').should('have.length', 5);
        cy.get('thead > tr > :nth-child(1)').should('have.text', 'State');
        cy.get('thead > tr > :nth-child(2)').should('have.text', 'Abbreviation');
        cy.get('thead > tr > :nth-child(3)').should('have.text', 'Population');
        cy.get('thead > tr > :nth-child(4)').should('have.text', 'Size');
        cy.get('thead > tr > :nth-child(5)').should('have.text', 'Flag');
    });
})

