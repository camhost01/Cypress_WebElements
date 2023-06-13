import landingpage from '../../PageObject/swags_labs/landingPage'
class actionlanding{
    userlogOut(){
        landingpage.elements.burgermenu()
        .should('be.visible').click()
        landingpage.elements.logoutlink()
        .should('be.visible').click()  
    }
    addProduct(number){        
        cy.landingP_addProduct(number)
        landingpage.elements.alercartproduct()
        .should('be.visible')
    }
    removeProduct(number){
        cy.landingP_rmvProduct(number)
        landingpage.elements.alercartproduct()
        .should('not.exist')
    }
    filteringProduct(){
        landingpage.elements.filterproduct().select('Name (A to Z)')
        landingpage.elements.inventoryfilter().contains('Sauce Labs Backpack')
        landingpage.elements.filterproduct().select('Name (Z to A)')
        landingpage.elements.inventoryfilter().contains('Test.allTheThings() T-Shirt (Red)')  
        landingpage.elements.filterproduct().select('Price (low to high)')
        landingpage.elements.inventoryprice().contains('7.99')  
        landingpage.elements.filterproduct().select('Price (high to low)')
        landingpage.elements.inventoryprice().contains('49.99')  
    }
    cartIconClick(){
        landingpage.elements.cartIcon().click()
    }
    openLandingLinks(){
        landingpage.elements.twiterlink()
        .should('be.visible')
        .click()
        landingpage.elements.linkdinlink()
        .should('be.visible')
        .click()

    }
}
module.exports = new actionlanding()