describe('Main Page', () => {
  it(`should display employee data from backend`, () => {
    // given
    cy.visit('/')

    // when
    cy.contains('Employees').click() // navigate to "Employees" page

    // then
    cy.contains('count: 50')
    cy.contains('Bertram Kruszewski, Junior .Net Engineer');
  })
})
