// cypress-image-diff.config.js
const config = {
    ROOT_DIR: 'cypress',
    SCREENSHOTS_DIR: 'images',
    FAILURE_THRESHOLD: 0.0,
    FAIL_ON_MISSING_BASELINE: false, // default to false
    COMPARISON_OPTIONS: { threshold: 0.1 }, // default to { threshold: 0.1 }
    JSON_REPORT: { 
        FILENAME: 'cypress_visual_report', // default "report_[datetime].json"
        OVERWRITE: true, // default true
      },
      CYPRESS_SCREENSHOT_OPTIONS: {
        disableTimersAndAnimations: true
      }
  };
  
  module.exports = config;