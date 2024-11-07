describe('Hjemmeside tester', () => {
      it('Test under menu Produkter', () => {
        cy.visit('/produkter');
        cy.contains('Industrielle verktøy og maskiner').should('be.visible');

        cy.contains('Maskiner').should('be.visible');
        cy.contains('Skjærende verktøy').should('be.visible'); 
        cy.contains('Holdende verktøy').should('be.visible');
        cy.contains('Prosesskontroll').should('be.visible'); 
        cy.contains('Oppspenning').should('be.visible');
        cy.contains('Måleverktøy').should('be.visible');
        cy.contains('Innredning').should('be.visible');
        
        /* ==== Test sub meny opsjoner ==== */
        cy.visit('http://localhost:8080/site/ege/master/ege');
        cy.contains('Våre ansatte').should('be.visible');

        /* ==== Test sub meny opsjoner ==== */

        cy.visit('/produkter/skjaerende-verktoy');
        cy.contains('Skjæerende verktøy').should('be.visible'); 

        cy.visit('/produkter/holdende-verktoy');
        cy.contains('Holdende verktøy').should('be.visible'); 
        
        cy.visit('/prosesskontroll');
        cy.contains('Prosesskontroll').should('be.visible'); 

        cy.visit('/produkter/oppspenning');
        cy.contains('Oppspenning').should('be.visible');
                
        cy.visit('/produkter/maleverktoy');
        cy.contains('Måleverktøy').should('be.visible');
       

        
       
        
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