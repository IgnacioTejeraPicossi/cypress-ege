const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://ege-xp7test.enonic.cloud/digernes',  // Test instalasjon for Digernes 
    
    //baseUrl:'http://localhost:8080',  // Dette tilsvarer å besøke 'http://localhost:8080'
    
    //baseUrl: 'http://localhost:8080/site/ege/master/ege', //*Not working now
    
    //baseUrl: 'http://www.ege.no',// Gamle URL for in.yngve ege
    //baseUrl: 'http://ege-xp7prod.enonic.cloud/admin/site/preview/ege/draft/eger',// Angi URL for prod installasjon
    //'http://localhost:8080/admin/site/preview/ege/draft/ege' // Angi URL for lokal installasjon
    //'http://localhost:8080/site/default/master/no' //Angi URL for lokal installasjon
    //http://localhost:8080/admin/tool/com.enonic.app.contentstudio/main#/ege/browse //Content Studio URL

        
   
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: false,
  }

});
