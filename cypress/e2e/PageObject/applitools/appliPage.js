class appliPage{
    elements={
        lginbtn: ()=> cy.get('#log-in'),
        valuesbox: ()=> cy.get('.element-box-tp'),
        pagebtn: ()=> cy.get('.btn.btn-primary.btn-sm')
    }

    loginWeb()
    {
        this.elements.lginbtn().click()
        this.elements.valuesbox().should('be.visible')
    }

    hideElement(){
        this.elements.pagebtn()
        .invoke('hide')
    }
}
module.exports = new appliPage()