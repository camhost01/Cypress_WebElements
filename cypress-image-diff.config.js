// cypress-image-diff.config.js
const config = {
    ROOT_DIR: 'cypress/e2e/images',
    FAILURE_THRESHOLD: 0.1,
    RETRY_OPTIONS: {
        log: true,
        limit: 5, // max number of iterations
        timeout: 30000, // time limit in ms
        delay: 100, // delay before next iteration, ms
        FAIL_ON_MISSING_BASELINE: true, // default to false
        COMPARISON_OPTIONS: { threshold: 0.2 }, // default to { threshold: 0.1 }
        JSON_REPORT: { 
            FILENAME: 'cypress_visual_report', // default "report_[datetime].json"
            OVERWRITE: false, // default true
          }, 
      },
  };
  
  module.exports = config;