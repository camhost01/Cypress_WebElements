/// <reference types="cypress" />

import datatest from '/Users/cramos/Documents/Automat Projects/Cypress/WebElements/cypress/fixtures/dataTest.json'
import loginPage from '../../PageObject/swags_labs/loginPage'
import landingPage from '../../PageObject/swags_labs/landingPage'
import cartScenarios from '../../PageObject/swags_labs/cartPage'
import checkoutpage from '../../PageObject/swags_labs/checkoutPage'

describe('Test escenarios swag_lab', ()=>{

    beforeEach(()=>{
        cy.visit(datatest.swags_labsURL)
    })

    it('Login Page Scenarios', ()=>{
        loginPage.validateLogin('incorrect')                //incorrect user
        loginPage.validateLogin('empty')                   //empty fields
        loginPage.validateLogin('correct')                //correct user
        landingPage.userlogOut()
    })
    //*******Landing Page Scenarios**********/
    it('Add and remove products in landing page', ()=>{
        loginPage.validateLogin('correct')                  //Login the user
        landingPage.addProduct(3)                           //Add the products in the landing-page
        landingPage.removeProduct(3)                       //Remove prodcuts in the landing-page
    })
    it('Filtering the products in landing page', ()=>{
        loginPage.validateLogin('correct')
        landingPage.filteringProduct()
        
    })
    it('HyperLinks landing page', ()=>{
        loginPage.validateLogin('correct')
        landingPage.openLandingLinks()
    })
    //*******Cart Scenarios**********/
    it('Cart removing - adding product', ()=>{
        loginPage.validateLogin('correct')
        landingPage.addProduct(2)
        landingPage.cartIconClick()
        cartScenarios.removeItem(1)
        cartScenarios.continueshoping()
        landingPage.addProduct(2)
        landingPage.cartIconClick()
        cartScenarios.checkproductlist()
    })
    //*******Checkout Scenarios**********/
    it('Checkout validations',()=>{
        loginPage.validateLogin('correct')
        landingPage.addProduct(4)
        landingPage.cartIconClick()
        cartScenarios.checkoutClick()
        checkoutpage.validateDataform()
        checkoutpage.backtoLandingPage()
    })
    it('Checkout - Complete process',()=>{
        loginPage.validateLogin('correct')
        landingPage.addProduct(4)
        landingPage.cartIconClick()
        cartScenarios.checkoutClick()
        checkoutpage.addCheckoutInfo(datatest.checkoutName,datatest.checkoutLName,datatest.checkoutZC)
        checkoutpage.finishProcess()
    })



})