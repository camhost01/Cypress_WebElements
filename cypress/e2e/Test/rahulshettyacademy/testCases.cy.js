/// <reference types="cypress" />
import actions from '../../Actions/rahulacademy/actions'
import data from '/cypress/fixtures/dataTest.json'

describe('Test Scenarios for Automation Practice', () => {

  beforeEach(()=>{
    cy.visit(data.rahulshettyacademyURL)  
 })

  it('Section 1 - Radiobtn/Inputxt/Dropdown/Checkbox', () => {
      actions.selectRadiobtn()
      actions.typeText('Colombia')
      actions.dropDownSelect()
      actions.checkBoxSelect()
  })
  it('Section 2 - New_Window/Tab_Example/Switch_Alert', () => {
      actions.openTabWindow()
      actions.popupAlert_Confirm() //Cypress auto-accept alerts and pop-ups
  })
  it('Section 3 - GetTable values', () => {
      actions.findValueinTable('TestNG')
  })
  it('Section 4 - Mouse Over', () => {
      actions.validateTextHideShow()
  })
  it('Section 5 - Iframe_Interaction', () => {
    actions.iframeInteraction()
  })
  
}) 