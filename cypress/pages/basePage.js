export class basePage {

    clickMenuOption(option){
        let selection = option

        switch(selection){
            case "Inbox":
                cy.get('#filter_inbox').click()
                break;
            case "Today":
                cy.get('#filter_today').click()
                break;
            case "Upcoming":
                cy.get('#filter_upcoming').click()
                break;
        }
    }

    provideProjectName(PROJECT_NAME){
        cy.get('input#edit_project_modal_field_name').type(PROJECT_NAME)
    }

    selectProjectColor(PROJECT_COLOR){
        cy.get('.color_dropdown_toggle.form_field_control').click()
        cy.get('li[role=option]').contains(PROJECT_COLOR).click()
    }

    getProjectLabel(){
        cy.get('li[data-type=project_list_item]').as('projectLabel')

        return cy.get('@projectLabel')
    }

    getFavoriteProjectLabel(){
        cy.get('ul[aria-label=Favorites]').find('li[data-type=project_list_item]').eq(0)
        .as('favoriteProjectLabel')

        return cy.get('@favoriteProjectLabel')
    }

    getProjectName(){
        cy.get('input[id=edit_project_modal_field_name]').focus().as('projectName')
        return cy.get('@projectName').invoke('text')
    }

    getFavoriteToggle(){
        cy.get('.reactist_switch').as('favoriteToggle')
        return cy.get('@favoriteToggle')
    }

    clickPlusProjectIcon(){
        cy.get('button.adder_icon').invoke('show')
        cy.get('button.adder_icon').click()
    }

    clickAddProjectButton(){
        cy.get('button.ist_button.ist_button_red').contains("Add").click()
    }

    createNewProject(PROJECT_NAME, PROJECT_COLOR, isFavorite = false){
        this.clickPlusProjectIcon()
        this.provideProjectName(PROJECT_NAME)
        this.selectProjectColor(PROJECT_COLOR)

        if(isFavorite == true){
            this.getFavoriteToggle().click()
        }

        this.clickAddProjectButton()
    }
}

export default new basePage()