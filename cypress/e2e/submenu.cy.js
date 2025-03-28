describe('Hjemmeside tester', () => {
      it('Test under menu Produkter', () => {
        cy.visit('/produkter');
        cy.contains('Industrielle verktøy og maskiner').should('be.visible');
        cy.contains('Spørsmål om våre produkter?').should('be.visible');
        
                     
        cy.visit('/');
        cy.contains('Måleverktøy').should('be.visible');
        cy.contains('Maskiner').should('be.visible');
        cy.contains('Skjærende verktøy').should('be.visible'); 
        cy.contains('Holdende verktøy').should('be.visible');
        cy.contains('Prosesskontroll').should('be.visible'); 
        cy.contains('Oppspenning').should('be.visible');
        cy.contains('Innredning').should('be.visible');
        
       

        /* ==== Test sub meny opsjoner ==== */
        cy.visit('http://localhost:8080/site/ege/master/ege');
        cy.contains('Våre ansatte').should('be.visible');

        cy.visit('http://localhost:8080/site/ege/master/ege/produkter/skjaerende-verktoy');
        cy.contains('Skjærende verktøy').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/produkter/holdende-verktoy');
        cy.contains('Holdende verktøy').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/produkter/prosesskontroll');
        cy.contains('Prosesskontroll').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/produkter/oppspenning');
        cy.contains('Oppspenning').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/produkter/maskiner');
        cy.contains('Maskiner').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/produkter/innredning');
        cy.contains('Innredning').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/produkter/maleverktoy');
        cy.contains('Måleverktøy').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/produkter/vaesker-og-smoremidler');
        cy.contains('Væsker og smøremidler').should('be.visible');



        /* ==== Test sub meny Våre leverandærer ==== */
        cy.visit('http://localhost:8080/site/ege/master/ege');
        cy.contains('Våre ansatte').should('be.visible');

        cy.visit('http://localhost:8080/site/ege/master/ege/leverandorer/amf');
        cy.contains('AMF').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/leverandorer/bowers');
        cy.contains('Bowers').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/leverandorer/cimcool');
        cy.contains('Cimcool').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/leverandorer/few');
        cy.contains('Few').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/leverandorer/fosen-tools');
        cy.contains('Fosen tools').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/leverandorer/guhring');
        cy.contains('Gühring').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/leverandorer/hwr');
        cy.contains('HWR').should('be.visible');

       
       // cy.visit('/');
        // cy.visit('http://localhost:8080/site/ege/master/ege/leverandorer/karnasch');
       //  cy.contains('Karnasch').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/leverandorer/kemmler');
        cy.contains('Kemmler').should('be.visible');

        //cy.visit('/');
        //cy.visit('http://localhost:8080/site/ege/master/ege/leverandorer/kraeplin');
        //cy.contains('Kraeplin').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/leverandorer/lista');
        cy.contains('Lista').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/leverandorer/lomas');
        cy.contains('Lomas').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/leverandorer/mitutoyo');
        cy.contains('Mitutoyo').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/leverandorer/renishaw');
        cy.contains('Renishaw').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/leverandorer/rocol');
        cy.contains('Rocol').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/leverandorer/rohm');
        cy.contains('Røhm').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/leverandorer/sic');
        cy.contains('SIC').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/leverandorer/steinmeyer');
        cy.contains('Steinmeyer').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/leverandorer/sylvac');
        cy.contains('Sylvac').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/leverandorer/thame-workholding');
        cy.contains('Thame Workholding').should('be.visible');

        //cy.visit('/');
        //cy.visit('http://localhost:8080/site/ege/master/ege/leverandorer/trimos');
        //cy.contains('Trimos').should('be.visible');

        cy.visit('/');
        cy.visit('http://localhost:8080/site/ege/master/ege/leverandorer/walter');
        cy.contains('Walter').should('be.visible');

        //cy.visit('/');
        //cy.visit('http://localhost:8080/site/ege/master/ege/leverandorer/wyler');
        //cy.contains('Wyler').should('be.visible');



        //div[normalize-space()='Skjærende verktøy']
        /* ==== Test sub meny opsjoner ==== */

        //cy.visit('/produkter/skjaerende-verktoy');
        //cy.contains('Skjæerende verktøy').should('be.visible'); 

        //cy.visit('/produkter/holdende-verktoy');
        //cy.contains('Holdende verktøy').should('be.visible'); 
        
        //cy.visit('/prosesskontroll');
        //cy.contains('Prosesskontroll').should('be.visible'); 

        //cy.visit('/produkter/oppspenning');
        //cy.contains('Oppspenning').should('be.visible');
                
        //cy.visit('/produkter/maleverktoy');
        //cy.contains('Måleverktøy').should('be.visible');
       

        
       
        
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