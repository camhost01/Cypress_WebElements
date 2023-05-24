/// <reference types="cypress" />
import objects from '../../PageObject/rahulshettyacademy/page'
import data from '/Users/cramos/Documents/Automat Projects/Cypress/WebElements/cypress/fixtures/dataTest.json'

describe('Test Scenarios for Automation Practice', () => {

  beforeEach(()=>{
    cy.visit(data.rahulshettyacademyURL)  
 })

  it('Section 1 - Radiobtn/Inputxt/Dropdown/Checkbox', () => {
      objects.selectRadiobtn()
      objects.inputText('Colombia')
      objects.dropDownSelect()
      objects.checkBoxSelect()
  })
  it('Section 2 - New_Window/Tab_Example/Switch_Alert', () => {
      objects.openTabWindow()
      objects.popupAlert_Confirm() //Cypress auto-accept alerts and pop-ups
  })
  it('Section 3 - GetTable values', () => {
      objects.findValueinTable('TestNG')
  })
  it('Section 4 - Mouse Over', () => {
      objects.validateTextHideShow()
  })
  it('Section 5 - Iframe_Interaction', () => {
    objects.iframeInteraction()
  })
  
}) 