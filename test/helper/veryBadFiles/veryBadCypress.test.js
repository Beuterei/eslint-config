describe('Bad Cypress Practice Example', () => {
  // Breaking 'cypress/no-unnecessary-waiting'
  it('has arbitrary wait', () => {
    cy.wait(5_000);
    cy.get('.element').click();
  });
});
