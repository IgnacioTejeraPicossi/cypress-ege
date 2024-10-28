const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://www.ege.no',// Angi URL for lokal installasjon
    //baseUrl: 'www.ege.no',// Gamle URL for in.yngve ege
   
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
