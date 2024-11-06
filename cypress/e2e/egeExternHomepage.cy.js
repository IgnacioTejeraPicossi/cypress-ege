describe('ege Extern Homepage test', () => {
    it('Verifiser at hjemmesiden laster korrekt', () => {
       

      cy.visit('http://www.ege.no');  // Dette tilsvarer å besøke 'http://www.ege.no'
      cy.contains('Totalleverandør av verktøy').should('be.visible');  // Sjekk at teksten "Totalleverandør av verktøy" er synlig

      //cy.get('a:nth-child(2) .styles_title__Ha2Nn').click();
              
       cy.wait(1000); // Vent 1 sekund (eller tilpass etter behov)
       cy.contains('Produkter');

       //cy.get('a[href="https://www.ege.no/produkter"][class="selectable"][data-open="false"]')
       //.should('be.visible')
       //.click();
       
       //a[@class=' selectable'][normalize-space()='Produkter']
       //.selectable[href='https://www.ege.no/produkter']
       //document.querySelector(".selectable[href='https://www.ege.no/produkter']")
       //"Produkter"
       ///html[1]/body[1]/div[1]/div[1]/section[1]/div[1]/div[1]/div[2]/div[1]/a[1]

    });
  });