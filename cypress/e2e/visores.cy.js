describe('Responsivitetstester', () => {
    it('Test på iPhone X', () => {
      cy.viewport('iphone-x');
      cy.visit('/');
      cy.get('nav').should('be.visible');
    });
    
    it('Test på iPhone 15', () => {
      cy.viewport(1179, 2556); // Øppløsning de iPhone 15
      cy.visit('/');
      cy.get('nav').should('be.visible');
    });
  
    it('Test på Samsung Galaxy S22', () => {
      cy.viewport(1080, 2340); // Øppløsning Galaxy S22
      cy.visit('/');
      cy.get('nav').should('be.visible');
    });
  
    it('Test i skrivebordsoppløsning', () => {
      cy.viewport(1280, 720);  // Skrivebordsoppløsning
      cy.visit('/');
      cy.get('nav').should('be.visible');
    });
    
    it('Test på iPad-2', () => {
      cy.viewport('ipad-2'); 
      cy.visit('/');
      cy.get('nav').should('be.visible');
    });

    it('Test på iPad-mini', () => {
      cy.viewport('ipad-mini');
      cy.visit('/');
      cy.get('nav').should('be.visible');
    });

    it('Test på Google Pixel 5, Legger til tester for en populær Android-enhet med standardoppløsning', () => {
      cy.viewport(1080, 2340); // Oppløsning for Pixel 5
      cy.visit('/');
      cy.get('nav').should('be.visible');
  });

  it('Test på Surface Duo - Enheten har et unikt skjermforhold, nyttig for å teste oppdeling og tilpasning', () => {
      cy.viewport(1350, 1800); // Oppløsning for Surface Duo
      cy.visit('/');
      cy.get('nav').should('be.visible');
  });

  it('Test på stor skrivebordsoppløsning (1920x1080), dekker en større skjermstandard for skrivebordsbruk.', () => {
      cy.viewport(1920, 1080); // Full HD skrivebordsoppløsning
      cy.visit('/');
      cy.get('nav').should('be.visible');
  });

  it('Test på ultrabred skjerm (2560x1440), for å teste oppsett på store skjermer eller monitorer med høy oppløsning.', () => {
      cy.viewport(2560, 1440); // WQHD oppløsning
      cy.visit('/');
      cy.get('nav').should('be.visible');
  });
  // Dispositivos adicionales

  it('Test en iPhone SE', () => {

    cy.viewport('iphone-se2'); // iPhone SE de segunda generación

    cy.visit('/');

    cy.get('nav').should('be.visible');

    });


    it('Test en iPhone 12 Pro Max', () => {

        cy.viewport(1284, 2778); // Resolución de iPhone 12 Pro Max

        cy.visit('/');

        cy.get('nav').should('be.visible');

    });


    it('Test en Samsung Galaxy Fold', () => {

        cy.viewport(1536, 2152); // Resolución desplegado para Galaxy Fold

        cy.visit('/');

        cy.get('nav').should('be.visible');

    });


    it('Test en Microsoft Lumia 950', () => {

        cy.viewport(1440, 2560); // Resolución para Lumia 950

        cy.visit('/');

        cy.get('nav').should('be.visible');

    });


    it('Test en MacBook Pro 13 pulgadas', () => {

        cy.viewport('macbook-13');

        cy.visit('/');

        cy.get('nav').should('be.visible');

    });


    it('Test en MacBook Pro 15 pulgadas', () => {

        cy.viewport('macbook-15');

        cy.visit('/');

        cy.get('nav').should('be.visible');

    });


    it('Test en monitor 4K (3840x2160)', () => {

        cy.viewport(3840, 2160); // Resolución 4K

        cy.visit('/');

        cy.get('nav').should('be.visible');

    });


    it('Test en monitor ultrawide (3440x1440)', () => {

        cy.viewport(3440, 1440); // Resolución ultrawide

        cy.visit('/');

        cy.get('nav').should('be.visible');

    });


    it('Test en resolución móvil pequeña (320x568)', () => {

        cy.viewport(320, 568); // Resolución para dispositivos muy pequeños

        cy.visit('/');

        cy.get('nav').should('be.visible');

    });


    it('Test en samsung-note9', () => {

        cy.viewport('samsung-note9');

        cy.visit('/');

        cy.get('nav').should('be.visible');

    });

  });