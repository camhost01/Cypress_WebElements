

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

    userlogOut(){
        this.elements.burgermenu()
        .should('be.visible').click()
        this.elements.logoutlink()
        .should('be.visible').click()  
    }
    addProduct(number){        
        cy.landingP_addProduct(number)
        this.elements.alercartproduct()
        .should('be.visible')
    }
    removeProduct(number){
        cy.landingP_rmvProduct(number)
        this.elements.alercartproduct()
        .should('not.exist')
    }
    filteringProduct(){
        this.elements.filterproduct().select('Name (A to Z)')
        this.elements.inventoryfilter().contains('Sauce Labs Backpack')
        this.elements.filterproduct().select('Name (Z to A)')
        this.elements.inventoryfilter().contains('Test.allTheThings() T-Shirt (Red)')  
        this.elements.filterproduct().select('Price (low to high)')
        this.elements.inventoryprice().contains('7.99')  
        this.elements.filterproduct().select('Price (high to low)')
        this.elements.inventoryprice().contains('49.99')  
    }
    cartIconClick(){
        this.elements.cartIcon().click()
    }
    openLandingLinks(){
        this.elements.twiterlink()
        .should('be.visible')
        .click()
        this.elements.linkdinlink()
        .should('be.visible')
        .click()

    }

}
module.exports = new landingPage()