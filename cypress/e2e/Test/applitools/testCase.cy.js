/// <reference types="cypress" />

import actions from '../../Actions/applitools/actions'
import datatest from '/cypress/fixtures/dataTest.json'

describe('Using Resemgle to campare images',()=>{
    beforeEach(()=>{
        cy.visit(datatest.appliURL)
        actions.loginWebsite()
    })
    it('Compare images',()=>{
        cy.matchImageSnapshot("Landing_Page")        //configuration based on website= 'https://medium.com/norwich-node-user-group/visual-regression-testing-with-cypress-io-and-cypress-image-snapshot-99c520ccc595'
        actions.hideElement()                       //hide btn element
        cy.matchImageSnapshot("Landing_Page")      //take a picture again
    })

})
