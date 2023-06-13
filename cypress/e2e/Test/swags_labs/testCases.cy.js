/// <reference types="cypress" />

import datatest from '/cypress/fixtures/dataTest.json'
import actionlogin from '../../Actions/swaglabs/actionlogin'
import actionlanding from '../../Actions/swaglabs/actionlanding'
import actioncart from '../../Actions/swaglabs/actioncart'
import actionchkout from '../../Actions/swaglabs/actioncheckout'

describe('Test escenarios swag_lab', ()=>{

    beforeEach(()=>{
        cy.visit(datatest.swags_labsURL)
    })

    it('Login Page Scenarios', ()=>{
        actionlogin.validateLogin('incorrect')                //incorrect user
        actionlogin.validateLogin('empty')                   //empty fields
        actionlogin.validateLogin('correct')                //correct user
        actionlanding.userlogOut()
    })
    //*******Landing Page Scenarios**********/
    it('Add and remove products in landing page', ()=>{
        actionlogin.validateLogin('correct')                  //Login the user
        actionlanding.addProduct(3)                           //Add the products in the landing-page
        actionlanding.removeProduct(3)                       //Remove prodcuts in the landing-page
    })
    it('Filtering the products in landing page', ()=>{
        actionlogin.validateLogin('correct')
        actionlanding.filteringProduct()
        
    })
    it('HyperLinks landing page', ()=>{
        actionlogin.validateLogin('correct')
        actionlanding.openLandingLinks()
    })
    //*******Cart Scenarios**********/
    it('Cart removing - adding product', ()=>{
        actionlogin.validateLogin('correct')
        actionlanding.addProduct(2)
        actionlanding.cartIconClick()
        actioncart.removeItem(1)
        actioncart.continueshoping()
        actionlanding.addProduct(2)
        actionlanding.cartIconClick()
        actioncart.checkproductlist()
    })
    //*******Checkout Scenarios**********/
    it('Checkout validations',()=>{
        actionlogin.validateLogin('correct')
        actionlanding.addProduct(4)
        actionlanding.cartIconClick()
        actioncart.checkoutClick()
        actionchkout.validateDataform()
        actionchkout.backtoLandingPage()
    })
    it('Checkout - Complete process',()=>{
        actionlogin.validateLogin('correct')
        actionlanding.addProduct(4)
        actionlanding.cartIconClick()
        actioncart.checkoutClick()
        actionchkout.addCheckoutInfo(datatest.checkoutName,datatest.checkoutLName,datatest.checkoutZC)
        actionchkout.finishProcess()
    })



})