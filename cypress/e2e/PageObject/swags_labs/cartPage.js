
class cartPage{
    elements={
        caritem: ()=> cy.get('.cart_item'),
        cartitle: ()=> cy.get('.title'),
        rmvcartitem: ()=> cy.get('.btn.btn_secondary.btn_small'),
        checkoutbtn: ()=> cy.get('.btn.btn_action.btn_medium'),
        continueshopbtn: ()=> cy.get('.btn.btn_secondary.back'),
        productnamelink: ()=> cy.get("[class='inventory_item_name']")
    }
}
module.exports = new cartPage()