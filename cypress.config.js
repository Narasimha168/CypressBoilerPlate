const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "2zp19b",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
