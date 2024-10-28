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
    
    it('Test på iPad', () => {
      cy.viewport('ipad-2'); 
      cy.visit('/');
      cy.get('nav').should('be.visible');
    });

    it('Test på iPad', () => {
      cy.viewport('ipad-mini');
      cy.visit('/');
      cy.get('nav').should('be.visible');
    });

  });