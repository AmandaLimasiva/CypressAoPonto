

Cypress.Commands.add('novaTransacao', (description, amount, date) => {
  cy.contains("Nova Transação").click();
  cy.get('#description').type(description);
  cy.get('#amount').type(amount);
  cy.get('#date').type(date);
  cy.contains('button', 'Salvar').click()
  cy.consta
})
