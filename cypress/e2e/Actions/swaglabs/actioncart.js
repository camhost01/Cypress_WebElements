import cartpage from '../../PageObject/swags_labs/cartPage'
class actioncart{

    removeItem(number){
        cartpage.elements.cartitle().should('be.visible')
        cy.landingP_rmvProduct(number)
        cartpage.elements.caritem().should('have.length.at.least',1)
    }
    continueshoping(){
        cartpage.elements.continueshopbtn().click()
    }
    checkproductlist(){
        cartpage.elements.caritem().should('have.length.at.least',1)
    }
    checkoutClick(){
        cartpage.elements.checkoutbtn().click()
    }

}
module.exports = new actioncart()