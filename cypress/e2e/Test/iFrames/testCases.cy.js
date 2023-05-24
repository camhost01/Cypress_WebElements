/// <reference types="cypress" />

import datatest from '/Users/cramos/Documents/Automat Projects/Cypress/WebElements/cypress/fixtures/dataTest.json'
import iframepage from '../../PageObject/iFrames/iframePage'

describe('Test escenarios swag_lab', ()=>{

    beforeEach(()=>{
        cy.visit(datatest.iFrameURL)
    })

    it('Single iFrame', ()=>{
        iframepage.singleIFform1()
    })
    it('Nested iFrame', ()=>{
        iframepage.nestedIframe()
    })
})