describe('Adicionar itens ao carrinho', () => {
  it('Deve adicionar dois produttos ao carrinho', () => {

    // Acessa a página de login
    cy.visit('https://saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user') 

    cy.get('[data-test="password"]').type('secret_sauce') 

    cy.get('[data-test="login-button"]').click()
      

    // Adiciona o primeiro produto ao carrinho
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();

    // Adiciona o segundo produto ao carrinho
    cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click();

   
    // Verifica se o carrinho tem 2 itens
    cy.get('.shopping_cart_badge').should('have.text', '2');

    

  });
});