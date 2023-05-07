describe('Api Check', () => {
  it('should check whether JSON API is available', () => {
    cy.visit('http://localhost:3000/')
    cy.contains("You're successfully running JSON Server")

    cy.request('http://localhost:3000/employees').as('employees')
    cy.get<Response>('@employees').should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length(50)
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
    });
  });
});