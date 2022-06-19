describe('Testing Profile page', () => {
  beforeEach(() => {
      cy.visit('/')
  })

  it('register new user -> login as new user -> profile contains', () => {
    cy.contains('a', 'Signup').click()
    cy.get('input[name="surname"]').type('surname1')
    cy.get('input[name="email"]').type('email@dot.com')
    cy.get('input[name="password"]').type('passwo')
    cy.get('button').contains('Sign up').click()
    cy.url().should('contain', '/login')

    cy.get('input[name="email"]').type('email@dot.com')
    cy.get('input[name="password"]').type('passwo')
    cy.get('button').contains('Login').click()
    cy.url().should('contain', '/profile')
    cy.contains('td', 'surname1')
    cy.contains('tr', 'surname')
    cy.contains('tr', 'Phone Numbers')
    cy.contains('tr', 'Actions')
  })
})