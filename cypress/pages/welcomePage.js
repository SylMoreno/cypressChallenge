class welcomePage {
    Selectors = {
        logInButton: () => cy.get('a').contains('Log in')
    }
}

modules.exports = new welcomePage();