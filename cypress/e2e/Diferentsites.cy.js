describe('Test forskjellige Hjemmesider', () => {
    it('Verifiser at hver side laster korrekt med image/png', () => {
       

      cy.visit('/');  // Dette tilsvarer å besøke 'http://www.ege.no'
      //cy.visit('http://localhost:8080/admin/site/preview/starter/draft/ege/');

      cy.get('img[src*="logo--ing-yngve-ege.png"]').should('be.visible');
      //<img src="/ege/_/image/83fdada6-c1a0-4219-bba8-74a84ec082f7:660b5d05863cbbc1322930afeb61423b524a0f8c/height-40/logo--ing-yngve-ege.png" alt="Gå til forside"></img>
      cy.contains('Din lokale leverandør').should('be.visible');  // Sjekk at teksten "Din lokale leverandør" er synlig

      cy.visit('http://localhost:8080/site/ege/master/ege'); //ege
      cy.contains('Din lokale leverandør').should('be.visible');  // Sjekk at teksten er synlig

      // //mangler installasjon ved localhost:8080 og mangler riktig png.
      //cy.visit('http://localhost:8080/site/ege/master/nor-swiss'); //nor-swiss
      //cy.get('img[src*="logo--nor-swiss.png"]').should('be.visible');
      
      //mangler installasjon ved localhost:8080.
      //cy.visit('http://localhost:8080/site/ege/master/metall-maskin'); //metall-maskin
      //cy.get('img[src*="logo--metall-maskin.png"]').should('be.visible');
      //<img src="/metall-maskin/_/image/6c80e99f-cb57-4691-879d-ac1a0131feb3:2ca5c294dd925eb99cd3dc00d62c66543cef3962/height-40/logo--metall-maskin.png" alt="Gå til forside"></img>
      
      //mangler installasjon ved localhost:8080.
      //cy.visit('http://localhost:8080/site/ege/master/helge-karlsen-as'); //
      //cy.get('img[src*="logo--helge-karlesen-as.png"]').should('be.visible');
      //<img src="/helge-karlsen-as/_/image/27f980e4-7490-483d-b1cd-2ec39a60aec1:05b7d3a526b44103cd1ee76751ecbf0d40ccc8c6/height-40/logo--helge-karlesen-as.png" alt="Gå til forside"></img>
    
      //mangler installasjon ved localhost:8080.
      //cy.visit('http://localhost:8080/site/ege/master/digernes'); //digernes
      //cy.get('img[src*="logo--digernes.png"]').should('be.visible');
      //<img src="/digernes/_/image/62f27aec-8045-4c74-b813-f44385b15041:704b4e039a4e17b7076185e1105cd99cf73a7eab/height-40/logo--digernes.png" alt="Gå til forside"></img>
      


    });
  });