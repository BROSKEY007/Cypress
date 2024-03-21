describe('Cart', function(){
    beforeEach(function(){
        cy.visit('https://demo.nopcommerce.com/')
    })

   it('Add to cart' , function(){
    cy.title() . should('eq','nopCommerce demo store')
    cy.wait(3000)
    cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch')
    cy.wait(3000)
    cy.xpath("//button[contains(text(),'Search')]").click()
    cy.wait(3000)
    cy.get('.product-title > a').click()
    cy.wait(3000)

    cy.get('#add-to-cart-button-4').click()
    cy.wait(3000)
    cy.get('.content > a').click()
    cy.wait(3000)

    cy.get('.product-unit-price').contains("$1,800.00")
    cy.wait(3000)

    cy.get('.product-subtotal').contains("$3,600.00")
    cy.wait(3000)


   })
})