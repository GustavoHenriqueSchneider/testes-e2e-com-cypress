const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		baseUrl: 'https://notes-serverless-app.com',
		env: {
			viewportWidthBreakpoint: 768
		},
	},
	defaultCommandTimeout: 10000,
	chromeWebSecurity: false,
	experimentalStudio: true
})
