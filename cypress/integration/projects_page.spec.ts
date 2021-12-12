/* eslint-disable */

describe('Projects Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.get('a[href*="projects"]').click()
    cy.url().should('include', '/projects')
    cy.get('h1').contains('under construction')
  })
})