describe('Main Page', () => {
  it(`should display title 'IT Corpo Angular App'`, () => {
    cy.visit('/')
    cy.contains('IT Corpo Angular App')
  })
})
