
class cartPage{
    elements={
        caritem: ()=> cy.get('.cart_item'),
        cartitle: ()=> cy.get('.title'),
        rmvcartitem: ()=> cy.get('.btn.btn_secondary.btn_small'),
        checkoutbtn: ()=> cy.get('.btn.btn_action.btn_medium'),
        continueshopbtn: ()=> cy.get('.btn.btn_secondary.back'),
        productnamelink: ()=> cy.get("[class='inventory_item_name']")

    }

    removeItem(number){
        this.elements.cartitle().should('be.visible')
        cy.landingP_rmvProduct(number)
        this.elements.caritem().should('have.length.at.least',1)
    }
    continueshoping(){
        this.elements.continueshopbtn().click()
    }
    checkproductlist(){
        this.elements.caritem().should('have.length.at.least',1)
    }
    checkoutClick(){
        this.elements.checkoutbtn().click()
    }
}
module.exports = new cartPage()