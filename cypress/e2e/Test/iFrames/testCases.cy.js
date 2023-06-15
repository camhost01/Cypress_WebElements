/// <reference types="cypress" />

import datatest from '/cypress/fixtures/dataTest.json'
import actions from '../../Actions/iframe/actions'

describe('Test escenarios iFRame - nested iFrame', ()=>{

    beforeEach(()=>{
        cy.visit(datatest.iFrameURL)
    })

    it('Single iFrame', ()=>{
        actions.typeSingleIframe()
    })
    it('Nested iFrame', ()=>{
        actions.typeNestedIframe()
    })
})