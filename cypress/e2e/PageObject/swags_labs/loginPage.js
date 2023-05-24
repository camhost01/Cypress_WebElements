import dataTest from '/Users/cramos/Documents/Automat Projects/Cypress/WebElements/cypress/fixtures/dataTest.json'
import landingpage from '../../PageObject/swags_labs/landingPage'
class loginPage
{
    elements={
        usernametxt: ()=> cy.get('#user-name'),
        passwordtxt: ()=> cy.get('#password'),
        loginbtn: ()=> cy.get('#login-button'),
        errortxt: ()=> cy.get("[data-test='error']"),
        closerrotxt: ()=> cy.get('.error-button')
    }

    validateLogin(typeUser){
        switch(typeUser)
        {
            case "correct":
                this.elements.usernametxt().clear().type(dataTest.swags_labs_users[0])
                this.elements.passwordtxt().clear().type(dataTest.swags_labs_passwords)
                this.elements.loginbtn().click()
                landingpage.elements.burgermenu().should('be.visible')
                break
            case "incorrect":
                this.elements.usernametxt().clear().type(dataTest.swags_labs_users[1])
                this.elements.passwordtxt().clear().type(dataTest.swags_labs_passwords)
                this.elements.loginbtn().click()
                this.elements.errortxt().should('be.visible')
                this.elements.closerrotxt()
                .should('be.enabled').click()
                break
            case "empty":
                this.elements.usernametxt().clear()
                this.elements.passwordtxt().clear()
                this.elements.loginbtn().click()
                this.elements.errortxt().should('be.visible')
                this.elements.closerrotxt()
                .should('be.enabled').click()
            default:
                break
        }
        
        
    }
}
module.exports = new loginPage()