import 'cypress-mailosaur'
import 'cypress-iframe'

import './commands'

Cypress.on('uncaught:exception', () => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})