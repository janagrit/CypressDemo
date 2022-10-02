const { defineConfig } = require('cypress')


module.exports = defineConfig(
  {
    "chromeWebSecurity": false,
    "projectId": "bcw7c4",
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json'
  }
})

