class basePage {
    Selectors = {
        //Menu options
    inboxButton: () => cy.get('#filter_inbox'),
    todayButton: () => cy.get('#filter_today'),
    upcomingButton: () => cy.get('#filter_upcoming'),
        
        //Projects items
    sectionName: () => cy.get('.sidebar_expansion_panel'),
    plusProjectIcon: () => cy.get('button[aria-label=Add Project]'),
    projectLabel: () => cy.get('li[data-type=project_list_item]'),
    favoriteProjectLabel: () => cy.get('ul[aria-label=Favorites]').find('li[data-type=project_list_item]'),

        //Projects modals items
    projectName: () => cy.get('input#edit_project_modal_field_name'),
    colorList: () => cy.get('div.form_field').find('button'),
    selectedColorLabel: () => cy.get('span.color_dropdown_select_name'),
    favoriteToggle: () => cy.get('.reactist_switch'),
    addProjectButton: () => cy.get('button[class=ist_button ist_button_red]').contains("Add")
    }

    createNewProject(PROJECT_NAME, PROJECT_COLOR, isFavorite = false){
        this.Selectors.plusProjectIcon().click()
        this.Selectors.projectName().type(PROJECT_NAME)
        this.Selectors.colorList().click()
        this.Selectors.selectedColorLabel().contains(PROJECT_COLOR).click()

        if(isFavorite == true){
            this.Selectors.favoriteToggle().click()
        }

        this.Selectors.addProjectButton().click()
    }
}

//modules.exports = new basePage()
export default new basePage()