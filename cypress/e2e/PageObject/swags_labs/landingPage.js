class landingPage{
    elements={
        burgermenu: ()=> cy.get('#react-burger-menu-btn'),
        logoutlink: ()=> cy.get('#logout_sidebar_link'),
        addproductbtn: ()=> cy.get('.btn.btn_primary.btn_small'),
        rmvproductbtn: ()=> cy.get('.btn.btn_secondary.btn_small'),
        alercartproduct: ()=> cy.get('.shopping_cart_badge'),
        cartIcon: ()=> cy.get('.shopping_cart_link'),
        filterproduct: ()=> cy.get('.product_sort_container'),
        inventoryfilter: ()=> cy.get('.inventory_item_name'),
        inventoryprice: ()=> cy.get('.inventory_item_price'),
        twiterlink: ()=> cy.get('a[href="https://twitter.com/saucelabs"]'),
        faceblink: ()=> cy.get('a[href="https://www.facebook.com/saucelabs"]'),
        linkdinlink: ()=> cy.get('a[href="https://www.linkedin.com/company/sauce-labs/"]')
    }
}
module.exports = new landingPage()