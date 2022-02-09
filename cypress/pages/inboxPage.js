import basePage from './basePage'

class inboxPage{
    Selectors = {
        inboxTaskLabels: () => cy.get('.task_list_item'),
        dueDateSublabel: () => cy.get('.task_list_item__info_tags'),

        //Task modal options
        deleteTaskOption: () => cy.get('.icon_menu_item__content').contains("Delete task"),
        confirmDeleteModal: () => cy.get('button[class=ist_button ist_button_red]').contains("Delete")
    }

    deleteAllTasks(){
        basePage.Selectors.inboxButton().click()

        let totalTasks = this.Selectors.inboxTaskLabels.count

        if(totalTasks > 0){
            do{
                this.Selectors.inboxTaskLabels().rightClick()
                this.Selectors.deleteTaskOption().click()
                this.Selectors.confirmDeleteModal().click()

                totalTasks = this.Selectors.inboxTaskLabels().count
            } while(totalTasks > 0)
        }
    }
}

modules.exports = new inboxPage()