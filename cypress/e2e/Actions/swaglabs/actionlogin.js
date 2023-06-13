import logpage from '../../PageObject/swags_labs/loginPage'
import dataTest from '/Users/cramos/Documents/Automat Projects/Cypress/WebElements/cypress/fixtures/dataTest.json'
import landingpage from '../../PageObject/swags_labs/landingPage'
class actionlogin{

    validateLogin(typeUser){
        switch(typeUser)
        {
            case "correct":
                logpage.elements.usernametxt().clear().type(dataTest.swags_labs_users[0])
                logpage.elements.passwordtxt().clear().type(dataTest.swags_labs_passwords)
                logpage.elements.loginbtn().click()
                landingpage.elements.burgermenu().should('be.visible')
                break
            case "incorrect":
                logpage.elements.usernametxt().clear().type(dataTest.swags_labs_users[1])
                logpage.elements.passwordtxt().clear().type(dataTest.swags_labs_passwords)
                logpage.elements.loginbtn().click()
                logpage.elements.errortxt().should('be.visible')
                logpage.elements.closerrotxt()
                .should('be.enabled').click()
                break
            case "empty":
                logpage.elements.usernametxt().clear()
                logpage.elements.passwordtxt().clear()
                logpage.elements.loginbtn().click()
                logpage.elements.errortxt().should('be.visible')
                logpage.elements.closerrotxt()
                .should('be.enabled').click()
            default:
                break
        }
            
    }

}
module.exports = new actionlogin()