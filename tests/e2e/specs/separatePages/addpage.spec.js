describe('Testing Add page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('register new user -> login as new user -> add phone', () => {
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

    cy.get('button').contains('Add').click()
    cy.get('input[id="item"]').type('+380501234567')
    cy.get('button').contains('Add').click()
    cy.url().should('contain', '/profile')
  })
})