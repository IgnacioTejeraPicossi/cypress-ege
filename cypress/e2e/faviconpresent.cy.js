describe('Favicon Verification', () => {
    it('Should contain the favicon-related links in the page head', () => {
        // Visit the specified page
        //cy.visit('http://localhost:8080/site/ege/master/ege');
        cy.visit('/');

        // Verify the presence of the favicon links
        cy.get('head link[rel="icon"]')
            .should('have.attr', 'href')
            .and('include', 'images/favicon.ico')
            .and('match', /favicon\.ico$/);
        
        cy.get('head link[rel="icon"][type="image/svg+xml"]')
            .should('have.attr', 'href')
            .and('include', 'images/icon.svg')
            .and('match', /icon\.svg$/);

        cy.get('head link[rel="apple-touch-icon"]')
            .should('have.attr', 'href')
            .and('include', 'images/apple-touch-icon.png')
            .and('match', /apple-touch-icon\.png$/);
    });
    //Explanation:
    //Favicon .ico File: Ensures that the link with rel="icon" pointing to favicon.ico exists.
    //SVG Icon: Verifies the rel="icon" link for an SVG file with the correct type and path.
    //Apple Touch Icon: Confirms that the rel="apple-touch-icon" pointing to the apple-touch-icon.png file is correctly set up.
});