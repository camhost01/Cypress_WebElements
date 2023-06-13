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

}
module.exports = new page()