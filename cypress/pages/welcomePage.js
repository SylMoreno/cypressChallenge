export class welcomePage {
    
    access() {
        cy.get('a').contains('Log in').click()
    }
}

export default new welcomePage()