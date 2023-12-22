const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  chromeWebSecurity: false,
  e2e: {
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 20000,
    video: true,
    viewportWidth: 1720,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
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