const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  chromeWebSecurity: false,
  e2e: {
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 20000,
    video: false,
    viewportWidth: 1720,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config)
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
        });
  
        on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
        });
    },
  },
});