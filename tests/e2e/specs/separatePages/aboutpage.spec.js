describe('Testing About page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('visits About page from Home page', () => {
        cy.get('footer').contains('About').click()
        cy.url().should('include', '/about')
    })

    it('checks that About page contains name creator', () => {
        cy.get('footer').contains('About').click()
        cy.url().should('include', '/about')
        cy.contains('p', 'Topikha Mykola KV-12mp')
    })
})