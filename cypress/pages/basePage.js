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

        return cy.get('@projectLabel').eq(0)
    }

    getFavoriteProjectLabel(){
        cy.get('ul[aria-label=Favorites]').find('li[data-type=project_list_item]')
        .as('favoriteProjectLabel')

        return cy.get('@favoriteProjectLabel').eq(0)
    }

    getProjectName(){
        cy.get('input#edit_project_modal_field_name').as('projectName')
        return cy.get('@projectName')
    }

    getFavoriteToggle(){
        cy.get('.reactist_switch').as('favoriteToggle')
        return cy.get('@favoriteToggle')
    }

    clickPlusPojectIcon(){
        cy.get('button.adder_icon').invoke('show')
        cy.get('button.adder_icon').click()
    }

    clickAddProjectButton(){
        cy.get('button.ist_button.ist_button_red').contains("Add").click()
    }
    
    Selectors = {
        //Projects items
    sectionName: () => cy.get('.sidebar_expansion_panel'),
    //plusProjectIcon: () => cy.get('button[aria-label=Add Project]'),
    //projectLabel: () => cy.get('li[data-type=project_list_item]'),
    //favoriteProjectLabel: () => cy.get('ul[aria-label=Favorites]').find('li[data-type=project_list_item]'),

        //Projects modals items
    //projectName: () => cy.get('input#edit_project_modal_field_name'),
    //colorList: () => cy.get('div.form_field').find('button'),
    //selectedColorLabel: () => cy.get('span.color_dropdown_select_name'),
    //favoriteToggle: () => cy.get('.reactist_switch'),
    //addProjectButton: () => cy.get('button[class=ist_button ist_button_red]').contains("Add")
    }

    createNewProject(PROJECT_NAME, PROJECT_COLOR, isFavorite = false){
        this.clickPlusPojectIcon()
        this.provideProjectName(PROJECT_NAME)
        this.selectProjectColor(PROJECT_COLOR)

        if(isFavorite == true){
            this.getFavoriteToggle().click()
        }

        this.clickAddProjectButton()
    }
}

export default new basePage()