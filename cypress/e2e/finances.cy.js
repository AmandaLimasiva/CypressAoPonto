describe("Transações", () => { //Agrupador

  let description;
  let amount;
  const date = '2023-05-01';

  beforeEach (() =>{
    cy.visit("https://devfinance-agilizei.netlify.app/#");
  })

  it("Cadastrar uma entrada", () => {
    cy.novaTransacao("Freelancer", "2.500", date);
    cy.contains('.description', 'Freelancer');


  })
  it("Cadastrar uma Saída", () => {
    cy.novaTransacao("Cinema", "-20.00", date);
    cy.contains('.description', "Cinema");
  })
  it('Excluir Transacao', () => {
    cy.novaTransacao("Parcela do Carro", "500", date);
    cy.novaTransacao("Mesada", "20.00", date);
    cy.novaTransacao("Parque", "50.00", date);
    cy.contains('.description', 'Parcela do Carro')
      .parent()
      .find('img').click();

    cy.contains('.description', 'Parque')
      .siblings()
      .children('img').click();

      cy.get('tbody tr').should("have.length", 1)
  })
})