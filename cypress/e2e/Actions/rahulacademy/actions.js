import rahupage from '../../PageObject/rahulshettyacademy/page'
class academyactions{

    //Section 1 - Radiobtn/Inputxt/Dropdown/Checkbox
    selectRadiobtn(){
        rahupage.elements.radiobtn1().click()
        rahupage.elements.radiobtn2().click()
    }
    typeText(Text){
        rahupage.elements.inputxt().type(Text).type('{esc}').click()
    }
    dropDownSelect(){
        rahupage.elements.dropdwn().select('Option1')
    }
    checkBoxSelect(){
        rahupage.elements.chboxoption1().click()
        rahupage.elements.chboxoption2().click()
    }

    //Section 2 - New_Window/Tab_Example/Switch_Alert
    openNewWindow(){
        rahupage.elements.openwindowbtn().invoke('removeAttr', 'target').click()
    
        cy.window().then((newWin) => {
           cy.url().should('include','rahulshettyacademy')
            cy.wrap(newWin).invoke('close'); 
            cy.go('back')
          })
    }
    openTabWindow(){
        rahupage.elements.openewtabtn().invoke('removeAttr', 'target').click()  //Open newTab in the same screen
        cy.url().should('include','qaclickacademy')                        //Check if url include the text
        cy.go('back')                                                     //Back to main screen to continue the testing
    }
    popupAlert_Confirm(){
        rahupage.elements.alertbtn().click()
        cy.on('window.alert', (stringAlert)=>{                                                                  //Handle the pop-up alert
            expect(stringAlert).to.have.text('Hello , share this practice page and share your knowledge')      //Validate if the alert have the text
        })
        rahupage.elements.confirmbtn().click()
        cy.on('window:confirm',(stringconfirm)=>{
            expect(stringconfirm).to.equal('Hello , Are you sure you want to confirm?')
        })
    }

    //Section 3 - GetTable values
    findValueinTable(valuelook){
            rahupage.elements.tablsecondelement().each(($tbElement)=>{
                const text = $tbElement.text()
                if(text.includes(valuelook)){
                    cy.log('VALUE IN THE TABLE')
                    cy.log(text)
                }else{
                    cy.log('Value not present')
                }

            })
    }
    validateTextHideShow(){
            rahupage.elements.txthide_show().type('Pillo')
            rahupage.elements.hidetxtbtn().click()
            rahupage.elements.txthide_show().should('not.be.visible')
            rahupage.elements.showtxtbtn().click()
            rahupage.elements.txthide_show().should('be.visible')
    }

    //Section 4 - Mouse Over
    mouseOver(){
            rahupage.elements.mouseoverbtn().trigger('mouseover')
    }

    //Section 5 - iFrame
    iframeInteraction(){
            cy.frameLoaded(rahupage.elements.mainiFrame())
            cy.iframe().find("a[href*='mentorship']")
            .should('be.visible')
            .eq(0).click()
            cy.iframe().find("div[class='container-fluid']")
            .eq(0)
            .contains('Jira')
    }
}
module.exports = new academyactions()