describe('Assert that the elements for the brand logo are not visible.', () => {
    it('Should contain the CookiebotWidget', () => {
        // Visit the specified page
        //cy.visit('http://localhost:8080/site/ege/master/ege');
        cy.visit('/');
        cy.get('#CybotCookiebotDialogPoweredByCybot').should('not.be.visible');
        cy.get('.CookiebotWidget-main-logo').should('not.be.visible');

    });
        //Explanation:
        //Assert that the elements for the brand logo 
        //(CybotCookiebotDialogPoweredByCybot and .CookiebotWidget-main-logo)
        // are not visible. Test i production?.
});
