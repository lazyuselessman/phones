describe('Testing Signup page', () => {
  beforeEach(() => {
      cy.visit('/')
  })

  it('register new user -> login page', () => {
    cy.contains('a', 'Signup').click()
    cy.get('input[name="surname"]').type('surname1')
    cy.get('input[name="email"]').type('email@dot.com')
    cy.get('input[name="password"]').type('passwo')
    cy.get('button').contains('Sign up').click()
    cy.url().should('contain', '/login')
  })

  it('register new user without email -> same page', () => {
    cy.contains('a', 'Signup').click()
    cy.get('input[name="surname"]').type('surname1')
    cy.get('input[name="password"]').type('passwo')
    cy.get('button').contains('Sign up').click()
    cy.url().should('contain', '/signup')
  })

  it('register new user without password -> same page', () => {
    cy.contains('a', 'Signup').click()
    cy.get('input[name="surname"]').type('surname1')
    cy.get('input[name="email"]').type('email@dot.com')
    cy.get('button').contains('Sign up').click()
    cy.url().should('contain', '/signup')
  })
})