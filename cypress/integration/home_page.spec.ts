/* eslint-disable */

describe('Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.get('h1').contains('Gustavo Levano')
  })
})