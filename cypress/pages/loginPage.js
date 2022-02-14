export class loginPage {

    clickSubmitButton(){
        cy.get('button').contains("Log in").click()
    }

    getErrorMessage(message){
        cy.get('.error_msg').should('contain', message)
    }

    submitLoginForm(username, password){
        cy.get('#email').type(username).invoke('text')
        cy.get('#password').type(password)
        this.clickSubmitButton()
    }

}

export default new loginPage()