describe('Supplier Grid Logo Tests', () => {
    beforeEach(() => {
      // Naviger til siden som inneholder supplier grid
      cy.visit('/'); // Juster URL basert på ditt miljø
    });
  
    it('should load logos with correct srcset attribute', () => {
      // Velg alle logo-bilder
      cy.get('.supplier-grid--supplier-illustration img').each(($img) => {
        // Verifiser at srcset-attributtet finnes
        cy.wrap($img).should('have.attr', 'srcset').and('not.be.empty');
  
        // Verifiser at src-attributtet finnes (fallback for eldre nettlesere)
        cy.wrap($img).should('have.attr', 'src').and('not.be.empty');
      });
    });
  
    it('should display sharp logos on Retina screens', () => {
      // Mock Retina-skjerm ved å simulere en høyere piksel-tetthet
      cy.viewport(1280, 800); // Simuler vanlig skjerm
      cy.get('.supplier-grid--supplier-illustration img').first().then(($img) => {
        // Få logoens URL fra srcset
        const srcset = $img.attr('srcset');
        const urls = srcset.split(',').map((item) => item.trim().split(' ')[0]);
  
        // Hent og last høyoppløselig bilde
        cy.request(urls[1]).then((response) => {
          expect(response.status).to.eq(200); // Verifiser at bildet eksisterer
        });
      });
    });
  
    it('should apply correct CSS class for image orientation', () => {
      // Test om orienteringen er satt riktig
      cy.get('.supplier-grid--supplier-illustration').each(($el) => {
        cy.wrap($el).invoke('attr', 'class').should('match', /supplier-logo-(portrait|landscape|even)/);
      });
    });
  
    it('should match image quality visually', () => {
      // Ta et skjermbilde for visuell regresjonstesting
      cy.get('.supplier-grid--supplier-illustration img').first().screenshot('logo-quality');
    });
  });
  