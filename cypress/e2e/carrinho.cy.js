describe('carrinho', () =>{
    it('adiciona um item ao carrinho com sucesso', () => {
        
      // arrange

      cy.visit('https://saucedemo.com/')

      cy.get('[data-test="username"]').type('standard_user') 

      cy.get('[data-test="password"]').type('secret_sauce')

      cy.get('[data-test="login-button"]').click()
      
      //act
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    })

})