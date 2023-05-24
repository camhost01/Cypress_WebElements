class page{
        elements={
    //Section 1 - Radiobtn/Inputxt/Dropdown/Checkbox
        radiobtn1: ()=> cy.get("input[value='radio1']"),
        radiobtn2: ()=> cy.get("input[value='radio2']"),
        inputxt: ()=> cy.get('#autocomplete'),
        dropdwn: ()=> cy.get('#dropdown-class-example'),
        chboxoption1: ()=> cy.get('#checkBoxOption1'),
        chboxoption2: ()=> cy.get('#checkBoxOption2'),
    //Section 2 - New_Window/Tab_Example/Switch_Alert
        openwindowbtn: ()=> cy.get('#openwindow'),
        openewtabtn: ()=> cy.get('#opentab'),
        nameinputtxt: ()=> cy.get('#name'),
        alertbtn: ()=> cy.get('#alertbtn'),
        confirmbtn: ()=> cy.get('#confirmbtn'),
    //'Section 3 - GetTable values'
        tablsecondelement: ()=> cy.get('tr td:nth-child(2)'),
        hidetxtbtn: ()=> cy.get('#hide-textbox'),
        showtxtbtn: ()=> cy.get('#show-textbox'),
        txthide_show: ()=> cy.get('#displayed-text'),
    //Section 4 - Mouse Over
        mouseoverbtn: ()=> cy.get('#mousehover'),
    //Section 5 - iFrame
        mainiFrame: ()=> cy.get('#courses-iframe')
    }

   //Section 1 - Radiobtn/Inputxt/Dropdown/Checkbox
        selectRadiobtn(){
            this.elements.radiobtn1().click()
            this.elements.radiobtn2().click()
        }
        inputText(Text){
            this.elements.inputxt().type(Text).type('{esc}').click()
        }
        dropDownSelect(){
            this.elements.dropdwn().select('Option1')
        }
        checkBoxSelect(){
            this.elements.chboxoption1().click()
            this.elements.chboxoption2().click()
        }
    //Section 2 - New_Window/Tab_Example/Switch_Alert
        openNewWindow(){
            this.elements.openwindowbtn().invoke('removeAttr', 'target').click()
        
            cy.window().then((newWin) => {
               cy.url().should('include','rahulshettyacademy')
                cy.wrap(newWin).invoke('close'); 
                cy.go('back')
              })
        }
        openTabWindow(){
            this.elements.openewtabtn().invoke('removeAttr', 'target').click()  //Open newTab in the same screen
            cy.url().should('include','qaclickacademy')                        //Check if url include the text
            cy.go('back')                                                     //Back to main screen to continue the testing
        }
        popupAlert_Confirm(){
            this.elements.alertbtn().click()
            cy.on('window.alert', (stringAlert)=>{                                                                  //Handle the pop-up alert
                expect(stringAlert).to.have.text('Hello , share this practice page and share your knowledge')      //Validate if the alert have the text
            })
            this.elements.confirmbtn().click()
            cy.on('window:confirm',(stringconfirm)=>{
                expect(stringconfirm).to.equal('Hello , Are you sure you want to confirm?')
            })
        }
    //Section 3 - GetTable values
        findValueinTable(valuelook){
            this.elements.tablsecondelement().each(($tbElement)=>{
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
            this.elements.txthide_show().type('Pillo')
            this.elements.hidetxtbtn().click()
            this.elements.txthide_show().should('not.be.visible')
            this.elements.showtxtbtn().click()
            this.elements.txthide_show().should('be.visible')
        }
    //Section 4 - Mouse Over
        mouseOver(){
            this.elements.mouseoverbtn().trigger('mouseover')
        }
    //Section 5 - iFrame
        iframeInteraction(){
            cy.frameLoaded(this.elements.mainiFrame())
            cy.iframe().find("a[href*='mentorship']")
            .should('be.visible')
            .eq(0).click()
            cy.iframe().find("div[class='container-fluid']")
            .eq(0)
            .contains('Jira')
    }
 }
module.exports = new page()