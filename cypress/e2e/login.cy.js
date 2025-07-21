describe('login',() => {
    it('realizae login com sucesso',() => {
        
      // arrange
      cy.visit('https://saucedemo.com/')  


      // act
      cy.get('[data-test="username"]').type('standard_user') 
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()

      // assert 
      cy.url().should('eq','https://www.saucedemo.com/inventory.html')


    })
})