describe('Adicionar e remover itens no carrinho - SauceDemo', () => {
  it('Deve adicionar dois produtos e depois removê-los', () => {
    // Acessa o site
    cy.visit('https://www.saucedemo.com');

    // Faz login
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Adiciona dois produtos ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    // Verifica se o carrinho tem 2 itens
    cy.get('.shopping_cart_badge').should('have.text', '2');

    // Vai para o carrinho
    cy.get('.shopping_cart_link').click();

    // Remove os dois produtos
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click();

    // Verifica se o carrinho está vazio (badge não existe)
    cy.get('.shopping_cart_badge').should('not.exist');
  });
});
    