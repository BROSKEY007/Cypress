describe('Cypress Basic', function(){
    it('Check Box Checked and Unchecked', function(){
        cy .visit ('https://codenboxautomationlab.com/practice/')

        //xpath
        let option1_xpath = "//input[@id='checkBoxOption1']"
        let option2_xpath = "//input[@id='checkBoxOption2']"
        let option3_xpath = "//input[@id='checkBoxOption3']"

        //value
        let option1_value = "option1"
        let option2_value = "option2"
        let option3_value = "option3"
// single check
cy.xpath(option1_xpath).check().should('be.enabled').and('have.value', option1_value)
cy.xpath(option2_xpath).check().should('be.enabled').and('have.value', option2_value)
cy.xpath(option3_xpath).check().should('be.enabled').and('have.value', option3_value)
//wait
cy.wait(2000)

 //single uncheck
 cy.xpath(option1_xpath).uncheck()
 cy.xpath(option2_xpath).uncheck()
 cy.xpath(option3_xpath).uncheck()

 //wait
cy.wait(2000)

//multiple check and unchecked
cy.get('input[type=checkbox]').check([option1_value,option2_value])

 



    })
})