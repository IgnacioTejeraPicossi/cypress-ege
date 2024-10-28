describe('Hjemmeside norsk test', () => {
    it('Verifiser at hjemmesiden laster korrekt', () => {
       

      cy.visit('/');  // Dette tilsvarer å besøke 'http://www.ege.no'
      //cy.visit('http://localhost:8080/admin/site/preview/starter/draft/ege/');


      cy.contains('Produkter').should('be.visible');  // Sjekk at teksten "Produkter" er synlig
      
    });
  });