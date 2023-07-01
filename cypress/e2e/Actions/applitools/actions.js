import pageappli from '../../PageObject/applitools/appliPage'

class actionsAppli{

    loginWebSite()
    {
        pageappli.elements.lginbtn().click()
        pageappli.elements.valuesbox().should('be.visible')
        pageappli.elements.timebar().should('be.visible').invoke('hide')
    }

    hideElement(){
        pageappli.elements.panelright()
        .should('be.visible')
        .invoke('hide')
    }
}
module.exports = new actionsAppli()