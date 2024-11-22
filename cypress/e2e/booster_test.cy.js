describe('Booster Application Test', () => {
    const url = '/';
  
    // Test for å sjekke at siden laster uten feil
    it('should load the page successfully', () => {
      cy.visit(url); // Besøk URL-en
      cy.get('body').should('exist'); // Sjekk at body-elementet finnes
    });
  
    // Test for å måle lastetid
    it('should load within acceptable time', () => {
      const maxLoadTime = 2000; // Maks akseptabel lastetid i millisekunder
  
      cy.visit(url, {
        onLoad: (window) => {
          const performance = window.performance;
          const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
          expect(loadTime).to.be.lessThan(maxLoadTime, `Lastetiden er ${loadTime} ms`);
        },
      });
    });
  
    // Test for å sjekke at Booster-applikasjonen er aktiv
    it('should verify Booster is applied', () => {
      cy.visit(url);
      // Kontroller spesifikke booster-relaterte elementer (f.eks. cache-header eller spesifikke DOM-endringer)
      cy.get('meta[name="x-booster-enabled"]') // Eksempel: sjekk etter en meta tag indikasjon
        .should('have.attr', 'content', 'true');
    });
  
    // Test for grunnleggende funksjonalitet (sjekk om viktige elementer fungerer)
    it('should display main content correctly', () => {
      cy.visit(url);
  
      // Eksempel: sjekk at hovedinnholdet er synlig
      cy.get('.main-content') // Erstatt med faktisk CSS-klasse eller ID
        .should('be.visible');
  
      // Kontroller om spesifikke tekstverdier vises korrekt
      cy.contains('Velkommen').should('exist');
    });
  });
  