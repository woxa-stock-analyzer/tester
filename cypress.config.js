const { defineConfig } = require("cypress");

require('dotenv').config({
  path: `.env.${process.env.ENV || 'dev'}`
})

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.APIENDPOINTS,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
