describe ('Alert Test', function(){

    beforeEach(function(){
        cy.visit('https://register.rediff.com/register/register.php')
    })
    it('Test',function(){
        cy.get('[width="200"]> input').type('Test User')
        cy.get('[valign="bottom"]>[type="text"]').type('12575521757')
        cy.get('#country').select('17')
        cy.xpath("//tbody/tr[22]/td[3]/select[1]").select('03')
        cy.wait(5000)
    })
})