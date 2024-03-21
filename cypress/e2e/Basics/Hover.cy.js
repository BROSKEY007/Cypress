describe('Hover Test', function(){
    it('Open Url', function(){
        cy .visit ('https://www.amazon.com/')
        cy.get('#nav-link-accountList').trigger('mouseover')
        cy.wait(5000)
        cy.get('[<a href="/gp/css/homepage.html?ref_=nav_AccountFlyout_ya"] > .nav-test').click()
        cy.wait(5000)
    })
})