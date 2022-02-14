import {basePage} from './basePage'

const basepage = new basePage()

export class inboxPage{

    getInboxTaskLabels(){
        return cy.get('.task_list_item')
    }

    clickDeleteTaskOption(){
        cy.get('.icon_menu_item__content').contains("Delete task").click()
    }

    clickConfirmDeleteModal(){
        cy.get('button').contains("Delete").click()
    }

    //dueDateSublabel: () => cy.get('.task_list_item__info_tags'),

    deleteAllTasks(){
        basepage.clickMenuOption("Inbox")

        cy.get('li.task_list_item').as('taskLabels')
        .each(($li) => {
            if($li.length > 0) {
                do{
                cy.get('@taskLabels').eq(0).rightclick({force: true})
                this.clickDeleteTaskOption()
                cy.wait(2000)
                this.clickConfirmDeleteModal()
                $li = $li.length
                } while( $li.length > 0)
            }
        })
        cy.wait(2000)
    }
}

export default new inboxPage()