/* eslint-disable */

describe('Projects Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.get('a[href*="projects"]').click()
    cy.url().should('include', '/projects')
    cy.get('h2').contains('Personal Website')
    cy.get('h2').contains('Tienda Danivo')
  })
})