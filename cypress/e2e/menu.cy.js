describe('Hjemmeside tester', () => {
    it('Test menu', () => {
        cy.visit('/');
        cy.contains('Produkter').should('be.visible');
        cy.contains('Leverandører').should('be.visible');
        cy.contains('Om oss').should('be.visible');
        cy.contains('Kontakt').should('be.visible');
        cy.contains('Austerå Process').should('be.visible');
        cy.contains('Slip & Spesialverktøy').should('be.visible');
    });
    it('Test under menu Produkter', () => {
        cy.visit('https://ege-xp7test.enonic.cloud/digernes/produkter/skjaerende-verktoy');
        cy.contains('Skjærende verktøy').should('be.visible');
        cy.visit('/produkter/holdende-verktoy');
        cy.contains('Holdende verktøy').should('be.visible');
        
        cy.visit('/produkter/oppspenning');
        cy.contains('Oppspenning').should('be.visible');
        
        cy.visit('/produkter/maleverktoy');
        cy.contains('Måleverktøy').should('be.visible');
        
        cy.visit('/prosesskontroll');
        cy.contains('Prosesskontroll').should('be.visible');
        /* ==== Test sub meny opsjoner ==== */
        //cy.visit('/');
        //cy.visit('http://localhost:8080/admin/site/preview/default/draft/eng/Fisheries');
        //cy.get('[class="btn-nav__title"]').eq(0).click();
        //cy.contains('Norwegian Fisheries Management').should('be.visible');       
        
        //cy.visit('/');
        //cy.visit('http://localhost:8080/admin/site/preview/default/draft/eng/Fisheries');
        //cy.get('[class="btn-nav__title"]').eq(1).click();
        //cy.contains('Control and enforcementt');       
      	
      });

});