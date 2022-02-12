class loginPage {
    Selectors = {
       emailInput: () => cy.get('#mail'),
       passwordInput: () => cy.get('#password'),
       submitloginButton: () => cy.get('button').contains("Log in"),
       errorMessage: () => cy.get('.error_msg')
    }

    submitLoginForm(username, password){
        if(username =! null){
            this.Selectors.emailInput().type(username)
        }
        if(password =! null){
            this.Selectors.passwordInput().type(password)
        }
        this.Selectors.submitloginButton().click()
    }

}

//modules.exports = new loginPage()
export default new loginPage()