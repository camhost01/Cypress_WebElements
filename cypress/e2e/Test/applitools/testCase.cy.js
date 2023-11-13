/// <reference types="cypress" />

import actions from '../../Actions/applitools/actions'
import datatest from '/cypress/fixtures/dataTest.json'

describe('Using Image-Diff to campare images',()=>{
    beforeEach(()=>{
        cy.visit(datatest.appliURL)
        actions.loginWebSite()
    })
    it('Compare images',()=>{
        cy.compareSnapshot("Landing_Page")        
        actions.hideElement()                       //hide btn element
        cy.compareSnapshot("Landing_Page")      //take a picture again
    })

})
