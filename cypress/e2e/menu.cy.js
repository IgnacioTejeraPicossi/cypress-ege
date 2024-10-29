describe('Hjemmeside tester', () => {
    it('Test menu', () => {
        cy.visit('/');
        cy.contains('Produkter').should('be.visible');  // Sjekk at teksten "Produkter" er synlig
        cy.contains('Meny').should('be.visible'); 
        cy.contains('Produkter').should('be.visible'); 
        cy.contains('Leverandører').should('be.visible'); 
        cy.contains('Ressurser').should('be.visible'); 
        cy.contains('Om oss').should('be.visible'); 
        cy.contains('Kontakt').should('be.visible'); 
        cy.contains('Nyheter').should('be.visible'); 
    });
    it('Test under menu Fisheries', () => {
        cy.visit('/produkter');
        cy.contains('Produkter').should('be.visible');
        
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