describe('Testing Login page', () => {
  beforeEach(() => {
      cy.visit('/')
  })

  it('login', () => {
    cy.url().should('contain', '/home')
    cy.contains('a', 'Login').click()
    cy.contains('p', 'Login')
  })
  
  it('register -> log in', () => {
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
  })

  it('register -> log in without password', () => {
    cy.contains('a', 'Signup').click()
    cy.get('input[name="surname"]').type('surname1')
    cy.get('input[name="email"]').type('email@dot.com')
    cy.get('input[name="password"]').type('passwo')
    cy.get('button').contains('Sign up').click()
    cy.url().should('contain', '/login')

    cy.get('input[name="email"]').type('email@dot.com')
    cy.get('button').contains('Login').click()
    cy.url().should('contain', '/login')
  })

  it('register -> log in without email', () => {
    cy.contains('a', 'Signup').click()
    cy.get('input[name="surname"]').type('surname1')
    cy.get('input[name="email"]').type('email@dot.com')
    cy.get('input[name="password"]').type('passwo')
    cy.get('button').contains('Sign up').click()
    cy.url().should('contain', '/login')

    cy.get('input[name="password"]').type('passwo')
    cy.get('button').contains('Login').click()
    cy.url().should('contain', '/login')
  })
})