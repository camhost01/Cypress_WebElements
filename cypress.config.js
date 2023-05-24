const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 20000,
    video: false,
    baseUrl: 'https://rahulshettyacademy.com/AutomationPractice/', 
    viewportWidth: 1720,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
    },
  },
});