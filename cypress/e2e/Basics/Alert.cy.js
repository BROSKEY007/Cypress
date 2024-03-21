

describe ('Alert Test', function(){

    beforeEach(function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })
      let js_alert = "//button[contains(text(), 'Click for JS Alert')]"
      let js_confirm ="//button[contains(text(), 'Click for JS Confirm')]"
      let js_prompt ="//button[contains(text(), 'Click for JS Prompt')]"
      let js_result ="//p[@id='result']"

 it ('test', function(){
    cy.xpath(js_alert).click()
    cy.wait(3000)
    cy.xpath(result).should('have.text', 'You Successfully clicked an alert')
    cy.wait(3000)
    cy.on('window:confirm', function(){
        return true
    })
    cy.xpath(js_confirm).click()
    cy.wait(3000)

  cy.window().then(function($win){
  cy.stub($win,'prompt').returns('Hello prompt')
  cy.xpath("//button[contains(text(), 'Click for JS Prompt')]").click()
  })



 })

})