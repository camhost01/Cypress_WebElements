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

    validateDataform(){
        this.elements.continuebtn().click()
        this.elements.errormessage().should('be.visible')
        this.elements.firstname().type('a')
        this.elements.continuebtn().click()
        this.elements.errormessage().should('be.visible')
        this.elements.lastname().type('a')
        this.elements.continuebtn().click()
        this.elements.errormessage().should('be.visible')
        this.elements.postalcode().type('a')
        this.elements.continuebtn().click()
    }
    backtoLandingPage(){
        this.elements.backbtn().click()
        landingPage.elements.burgermenu()
        .should('be.visible')
    }
    addCheckoutInfo(name,lname,zipcode){
        this.elements.firstname().type(name)
        this.elements.lastname().type(lname)
        this.elements.postalcode().type(zipcode)
    }
    finishProcess(){
        this.elements.continuebtn().click()
        this.elements.finishbtn().click()
        this.elements.successmessage().should('be.visible')
    }


}
module.exports = new checkoutPage()