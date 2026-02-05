const { defineConfig } = require("cypress");

require('dotenv').config({
  path: `.env.${process.env.ENV || 'dev'}`
})

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1440,
    baseUrl: "https://stockanalyzer.adenxus.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
