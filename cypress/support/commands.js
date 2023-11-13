import landinPage from '../../cypress/e2e/PageObject/swags_labs/landingPage'
const compareSnapshotCommand = require('cypress-image-diff-js/dist/command');
compareSnapshotCommand();
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
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
