import basepage from './basePage'

class projectsPage{

    Selectors = {
        //Projects details
        editProjectButton: () => cy.get('div[class=icon_menu_item__content]').contains("Edit project"),

        //Delete modal selectors
        projectLabelOptions: () => cy.get('td.menu'),
        deleteProjectOption: () => cy.get('td[data-track=projects|menu_delete]'),
        confirmDeleteButton: () => cy.get('button').contains("Delete")
    }

    deleteProjects(){
        let count = basepage.Selectors.projectLabel().count

        if(count > 0){
            do{
                basepage.Selectors.projectLabel().eq(count-1).rightClick()
                this.Selectors.deleteProjectOption().click()
                this.Selectors.confirmDeleteButton().click()
                count = basepage.Selectors.projectLabel.count
            } while( count > 0)
        }
    }

    validateProject(PROJECT_NAME, PROJECT_COLOR, isFavorite = false){
        let favFlag = isFavorite

        basepage.Selectors.projectLabel().rightClick()
        this.Selectors.editProjectButton().click()

        let target = {
            name: basepage.Selectors.projectName().value,
            color: basepage.Selectors.colorList().innerText,
            isFavorite: basepage.favoriteToggle().hasClass('reactist_switch--checked')
        }

        if(target.name == PROJECT_NAME && target.color == PROJECT_COLOR && target.isFavorite == favFlag){
            return true
        }
        else {
            return false
        }
    }
}

modules.exports = new projectsPage()