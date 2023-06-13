import landingPage from "./landingPage"
class checkoutPage{
    elements={
        firstname: ()=> cy.get('#first-name'),
        lastname: ()=> cy.get('#last-name'),
        postalcode: ()=> cy.get('#postal-code'),
        errormessage: ()=> cy.get('.error-message-container.error'),
        continuebtn: ()=> cy.get('.submit-button.btn.btn_primary'),
        backbtn: ()=> cy.get('.btn.btn_secondary.back'),
        finishbtn: ()=> cy.get('.btn.btn_action.btn_medium'),
        successmessage: ()=> cy.get('#checkout_complete_container')
  
    }
}
module.exports = new checkoutPage()