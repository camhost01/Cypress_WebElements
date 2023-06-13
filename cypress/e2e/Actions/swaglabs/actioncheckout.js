import checkoutpag from '../../PageObject/swags_labs/checkoutPage'
class actioncheckout{
    validateDataform(){
        checkoutpag.elements.continuebtn().click()
        checkoutpag.elements.errormessage().should('be.visible')
        checkoutpag.elements.firstname().type('a')
        checkoutpag.elements.continuebtn().click()
        checkoutpag.elements.errormessage().should('be.visible')
        checkoutpag.elements.lastname().type('a')
        checkoutpag.elements.continuebtn().click()
        checkoutpag.elements.errormessage().should('be.visible')
        checkoutpag.elements.postalcode().type('a')
        checkoutpag.elements.continuebtn().click()
    }
    backtoLandingPage(){
        checkoutpag.elements.backbtn().click()
        landingPage.elements.burgermenu()
        .should('be.visible')
    }
    addCheckoutInfo(name,lname,zipcode){
        checkoutpag.elements.firstname().type(name)
        checkoutpag.elements.lastname().type(lname)
        checkoutpag.elements.postalcode().type(zipcode)
    }
    finishProcess(){
        checkoutpag.elements.continuebtn().click()
        checkoutpag.elements.finishbtn().click()
        checkoutpag.elements.successmessage().should('be.visible')
    }


}
module.exports = new actioncheckout()