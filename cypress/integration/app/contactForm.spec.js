describe('primeiro teste', () => {
  it('só abrir o formulário de contato', () => {
    cy.visit('/');
    cy.get('li').contains('Contato').click();
  });
});
