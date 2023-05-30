/// <reference types="cypress" />

import applipage from '../../PageObject/applitools/appliPage'
import datatest from '/cypress/fixtures/dataTest.json'

describe('Using Resemgle to campare images',()=>{
    beforeEach(()=>{
        cy.visit(datatest.appliURL)
        applipage.loginWeb()
    })
    it('should campare images',()=>{
        cy.matchImageSnapshot()       //configuration based on website= 'https://medium.com/norwich-node-user-group/visual-regression-testing-with-cypress-io-and-cypress-image-snapshot-99c520ccc595'
        applipage.hideElement()
        cy.matchImageSnapshot()
        
    })

})
