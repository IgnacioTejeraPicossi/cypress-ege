

describe('Digernes.no grunnleggende tester', () => {
    
    beforeEach(() => {
        // Besøk nettsiden før hver test
        cy.visit('https://www.digernes.no');
    });

    it('Sjekker at siden laster riktig', () => {
        // Sjekker at nettsiden inneholder tittelen "Digernes" (eller en lignende tekst)
        cy.title().should('include', 'Digernes');
    });

    it('Sjekker at hovednavigasjonen er synlig', () => {
        // Sjekker om navigasjonsmenyen er synlig
        cy.get('nav').should('be.visible');
    });

    //it('Sjekker at logoen er synlig', () => {
      //  // Sjekker om logoen vises på siden
        //cy.get('img[alt="Digernes logo"]').should('be.visible');
    //});

    it('Sjekker at det finnes minst én hovedseksjon', () => {
        // Sjekker at en hovedseksjon eksisterer på forsiden
        cy.get('main').should('exist');
    });

    it('Sjekker at det finnes en kontakt- eller informasjonsseksjon', () => {
        // Sjekker om det finnes en seksjon for kontaktinformasjon eller lignende
        cy.contains('Kontakt').should('exist'); // Eller endre teksten basert på innholdet
    });

    it('Sjekker at footeren er synlig', () => {
        // Sjekker om footeren er synlig
        cy.get('footer').should('be.visible');
    });

    //it('Sjekker at en viktig knapp er klikkbar', () => {
      //  // Sjekker om en knapp (for eksempel "Les mer" eller "Kontakt oss") er klikkbar
      //  cy.contains('Les mer').click();
      //  // Bekrefter at en ny side lastes eller at noe skjer etter klikket
     //   cy.url().should('include', '/noe'); // Endre "/noe" til riktig vei basert på knappen
    //});

    it('Sjekker responsivitet på mobil (iPhone X)', () => {
        // Setter viewport til iPhone X-størrelse og sjekker at hovedinnholdet er synlig
        cy.viewport('iphone-x');
        cy.get('nav').should('be.visible');
        cy.get('main').should('be.visible');
    });
});

describe('Digernes.no Leverandørside - Slipss', () => {
    
    beforeEach(() => {
        // Besøk Slipss-siden før hver test
        cy.visit('https://www.digernes.no/leverandorer/Slipss');
    });

   // it('Sjekker at siden laster riktig med korrekt tittel', () => {
     //   // Sjekker at sidetittelen inneholder "Slipss" eller liknende
       // cy.title().should('include', 'Slipss');
    //});

    //it('Sjekker at leverandørens navn er synlig på siden', () => {
      //  // Sjekker at navnet på leverandøren "Slipss" vises som overskrift på siden
        //cy.contains('Slipss').should('be.visible');
    //});

    it('Sjekker at hovednavigasjonen er synlig', () => {
        // Sjekker om navigasjonsmenyen er synlig på leverandørsiden
        cy.get('nav').should('be.visible');
    });

    it('Sjekker at minst ett produktbilde er synlig', () => {
        // Sjekker at det finnes minst ett produktbilde eller leverandørbilde på siden
        cy.get('img').should('have.length.greaterThan', 0); // Tilpass om det finnes en spesifikk klasse eller ID for bilder
    });

    //it('Sjekker at produktbeskrivelser eller -titler er synlige', () => {
     //   // Sjekker om det finnes tekst som representerer produkttitler eller beskrivelser
     //   cy.get('.product-title').should('be.visible'); // Endre '.product-title' til riktig klasse eller ID basert på siden
   // });

    it('Sjekker at footer-elementet er synlig', () => {
        // Sjekker at footeren er synlig
        cy.get('footer').should('be.visible');
    });

   // it('Sjekker at knapper for å kontakte leverandøren eller kjøpe produkter er klikkbare', () => {
     //   // Sjekker om en knapp (f.eks. "Kjøp nå" eller "Kontakt oss") er klikkbar
      //  cy.contains('Kjøp nå').click(); // Juster teksten til riktig knapp
        //cy.url().should('include', '/kjop'); // Bekreft at en ny side lastes eller noe skjer
    //});

    //it('Sjekker at det finnes en tilbakeknapp til oversikten', () => {
     //   // Sjekker at det finnes en knapp for å gå tilbake til leverandøroversikten
     //   cy.contains('Tilbake til leverandører').should('be.visible').click();
     //   cy.url().should('include', '/leverandorer'); // Bekrefter at brukeren sendes tilbake til leverandøroversikten
   // });

    it('Sjekker responsivitet på mobil (iPhone X)', () => {
        // Sjekker at siden er responsiv ved iPhone X viewport-størrelse
        cy.viewport('iphone-x');
        cy.get('nav').should('be.visible');
        cy.get('main').should('be.visible');
    });
});

describe('Digernes.no Leverandørside - Austera Process', () => {
    
    beforeEach(() => {
        // Besøk Austera Process-siden før hver test
        cy.visit('https://www.digernes.no/leverandorer/austera-process');
    });

    //it('Sjekker at siden laster med riktig tittel', () => {
      //  // Sjekker at sidetittelen inneholder "Austera Process"
      //  cy.title().should('include', 'Austera Process');
   // });

    //it('Sjekker at leverandørens navn "Austera Process" er synlig', () => {
      //  // Sjekker at leverandørens navn vises på siden
      //  cy.contains('Austera Process').should('be.visible');
    //});

    it('Sjekker at hovednavigasjonen er synlig', () => {
        // Sjekker om navigasjonsmenyen er synlig
        cy.get('nav').should('be.visible');
    });

    it('Sjekker at minst ett produktbilde er synlig', () => {
        // Sjekker at det finnes minst ett produktbilde relatert til Austera Process
        cy.get('img').should('have.length.greaterThan', 0); // Bruk spesifikke klasser eller ID-er hvis tilgjengelig
    });

    //it('Sjekker at produktbeskrivelser eller -titler er synlige', () => {
      //  // Sjekker om det finnes tekst for produktbeskrivelser eller -titler
        //cy.get('.product-title').should('be.visible'); // Juster klasse eller ID etter sidens faktiske struktur
    //});

    it('Sjekker at footer-elementet er synlig', () => {
        // Sjekker at footeren er synlig
        cy.get('footer').should('be.visible');
    });

    //it('Sjekker at en knapp for kontakt eller kjøp er klikkbar', () => {
     //   // Sjekker om en knapp som "Kontakt oss" eller "Kjøp nå" er klikkbar
      //  cy.contains('Kontakt oss').click(); // Juster teksten etter faktiske knappnavn på siden
      //  cy.url().should('include', '/kontakt'); // Bekrefter at knappen leder til kontaktsiden
    //});

    //it('Sjekker at det finnes en tilbakeknapp til leverandøroversikten', () => {
      //  // Sjekker at det finnes en tilbakeknapp for å gå tilbake til leverandøroversikten
        //cy.contains('Tilbake til leverandører').should('be.visible').click();
        //cy.url().should('include', '/leverandorer'); // Bekrefter at brukeren sendes tilbake til leverandøroversikten
    //});

    it('Sjekker responsivitet på mobil (iPhone X)', () => {
        // Setter viewport til iPhone X-størrelse og tester at siden fortsatt fungerer
        cy.viewport('iphone-x');
        cy.get('nav').should('be.visible');
        cy.get('main').should('be.visible');
    });
});