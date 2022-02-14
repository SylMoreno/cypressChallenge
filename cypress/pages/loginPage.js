import {welcomePage} from './welcomePage'

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

    validUserLogin(){
        const CREDENTIALS = Cypress.env('CREDENTIALS')
        const welcomepage = new welcomePage()

        welcomepage.access()
        cy.get('#email').type(CREDENTIALS.VALID_USER.MAIL)
        cy.get('#password').type(CREDENTIALS.VALID_USER.PASSWORD)
        this.clickSubmitButton()
    }

}

export default new loginPage()