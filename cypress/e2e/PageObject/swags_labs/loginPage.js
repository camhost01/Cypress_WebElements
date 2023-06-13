class loginPage
{
    elements={
        usernametxt: ()=> cy.get('#user-name'),
        passwordtxt: ()=> cy.get('#password'),
        loginbtn: ()=> cy.get('#login-button'),
        errortxt: ()=> cy.get("[data-test='error']"),
        closerrotxt: ()=> cy.get('.error-button')
    }

}
module.exports = new loginPage()