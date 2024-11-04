describe('Hjemmeside tester', () => {
    it('Test menu', () => {
        cy.visit('/');
        cy.contains('Din lokale leverandør').should('be.visible');  // Sjekk at teksten "Din lokale leverandør" er synlig
        cy.contains('Våre produkter').should('be.visible'); 
        cy.contains('Om oss').should('be.visible'); 
        cy.contains('Våre ansatte').should('be.visible'); 
        cy.contains('Kvalitet og kompetanse').should('be.visible'); 
        cy.contains('Våre leverandører').should('be.visible'); 
        
    });
    it('Test under menu Fisheries', () => {
        cy.visit('/produkter/skjaerende-verktoy');
        cy.contains('Skjærende verktøy').should('be.visible');
        
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