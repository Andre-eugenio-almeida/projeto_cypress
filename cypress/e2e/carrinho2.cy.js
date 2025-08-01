describe('Remover dois itens do carrinho - SauceDemo', () => {
  it('Deve remover dois produtos do carrinho', () => {
    // Acessa o site
    cy.visit('https://www.saucedemo.com');

    // Faz login
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Adiciona dois itens ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    // Vai para o carrinho
    cy.get('.shopping_cart_link').click();

    // Remove os dois itens
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click();

    // Verifica se o carrinho está vazio
    cy.get('.cart_item').should('have.length', 0);

    // Verifica que o ícone do carrinho não mostra número
    cy.get('.shopping_cart_badge').should('not.exist');

    
    
  });
});


    

  