describe('Hjemmeside norsk test', () => {
    it('Verifiser at hjemmesiden laster korrekt', () => {
       

      cy.visit('/');  // Dette tilsvarer å besøke 'http://localhost:8080/admin/site/preview/starter/draft/ege/'
      cy.visit('http://localhost:8080/admin/site/preview/starter/draft/ege/');


      cy.contains('Halloen!').should('be.visible');  // Sjekk at teksten "Halloen!" er synlig
      
    });
  });