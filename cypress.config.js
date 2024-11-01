const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://www.ege.no',// Gamle URL for in.yngve ege
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
