const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 20000,
    video: false,
    viewportWidth: 1720,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config)
    },
  },
});