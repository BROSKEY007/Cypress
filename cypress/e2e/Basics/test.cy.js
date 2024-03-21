describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://www.shohoz.com/')
      cy.wait(5000)
      cy.get('.icon-bus'). click()
      cy.get('#dest_from'). type('Dhaka')
    })
  })