/// <reference types="cypress" />

import datatest from '/cypress/fixtures/dataTest.json'
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