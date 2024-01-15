import landinPage from '../../cypress/e2e/PageObject/swags_labs/landingPage'

Cypress.Commands.add('landingP_addProduct',(number) =>{ 
    
    landinPage.elements.addproductbtn()
    .each(($buttons,index)=>{
        if(index<number){
        cy.wrap($buttons).click()  
        } 
    })

})
Cypress.Commands.add('landingP_rmvProduct',(number) =>{ 
    landinPage.elements.rmvproductbtn()
    .each(($buttons,index)=>{
        if(index<number){
            cy.wrap($buttons).click()
        }
    })

})
