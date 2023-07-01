class appliPage{
    
    elements={
        lginbtn: ()=> cy.get('#log-in'),
        valuesbox: ()=> cy.get('.element-box-tp'),
        pagebtn: ()=> cy.get('.btn.btn-primary.btn-sm'),
        panelright: ()=> cy.get('.main-menu'),
        timebar: ()=> cy.get('#time')
    }

}
module.exports = new appliPage()