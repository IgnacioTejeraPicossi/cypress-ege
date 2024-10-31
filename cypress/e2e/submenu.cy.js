describe('Hjemmeside tester', () => {
      it('Test under menu Produkter', () => {
        cy.visit('/produkter');
        cy.contains('Produkter').should('be.visible');
        cy.contains('Meny').should('be.visible'); 
        cy.contains('Skjærende verktøy').should('be.visible'); 
        cy.contains('Holdende verktøy').should('be.visible'); 
        cy.contains('Oppspenningsverktøy').should('be.visible'); 
        cy.contains('Måleverktøy').should('be.visible'); 
        cy.contains('Kjølevæsker').should('be.visible'); 
        cy.contains('Smøremidler').should('be.visible'); 
        cy.contains('Innredninger').should('be.visible'); 
        cy.contains('Merkemaskiner & utstyr').should('be.visible'); 
        cy.contains('Målemaskiner & utstyr').should('be.visible'); 
        cy.contains('Vedlikehold skjærevæsker').should('be.visible'); 

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