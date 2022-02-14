export class welcomePage {
    
    access() {
        const SITE = Cypress.env('SITE')
        
        cy.visit(SITE.SUT_URL_UI)
        cy.get('a').contains('Log in').click()
    }
}

export default new welcomePage()