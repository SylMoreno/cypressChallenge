import {basePage} from './basePage'
import {inboxPage} from './inboxPage'

const basepage = new basePage()
const inboxpage = new inboxPage()

export class todayPage {

    getHeaderTitle(){
        cy.get('header[data-testid=view_header]').should('contain', "Today")
        return this
    }

    validateTaskLabelTitle(title){
        cy.get('li.task_list_item').eq(-1).should('contain', title)
    }

    clickAddButton(){
        cy.get('button.plus_add_button').click()
    }

    fillTaskData(taskName){
        cy.get('div[role=textbox]').type(taskName).blur()
    }

    selectCalendarTomorrow(){
        cy.get('span[class=date date_today]').click()
        cy.get('div[class=scheduler-suggestions-item-label]').contains("Tomorrow").click()
    }

    validateTaskNumber(TASK_NUMBER){
        cy.get('li.task_list_item').as('tasklabel')
        
        cy.get('@tasklabel').should(($li) => {
            expect($li).to.have.length(TASK_NUMBER)
        })
    }

    addNewTask(TASK_NUMBER, TASK_DUE, TASK_NAME){
        let due = TASK_DUE

        switch(due){
            case "Tomorrow":
                if(TASK_NUMBER == 1){
                    basepage.clickMenuOption("Today")
                    this.clickAddButton()
                    this.fillTaskData(TASK_NAME)
                    this.selectCalendarTomorrow()
                    cy.contains("Add task").click()
                    basepage.clickMenuOption("Inbox")
                    this.validateTaskNumber(TASK_NUMBER)
                }
                else{
                    basepage.clickMenuOption("Today")
                    this.clickAddButton()
                    for(let i = 1; i <= TASK_NUMBER; i++){ 
                        this.fillTaskData(i + " " + TASK_NAME)
                        this.selectCalendarTomorrow()
                        cy.contains("Add task").click()
                        basepage.clickMenuOption("Inbox")
                        inboxpage.getInboxTaskLabels().invoke('text').should('eq', i + " " + TASK_NAME)
                    }
                }
                break;
            case "Today":
                if(TASK_NUMBER == 1){
                    basepage.clickMenuOption("Today")
                    this.clickAddButton()
                    this.fillTaskData(TASK_NAME)
                    cy.contains("Add task").click()
                    this.validateTaskNumber(TASK_NUMBER)
                }
                else{
                    basepage.clickMenuOption("Today")
                    this.clickAddButton()
                    for(let i = 1; i <= TASK_NUMBER; i++){
                        this.fillTaskData(i + " "+ TASK_NAME)
                        cy.contains("Add task").click()

                        this.validateTaskLabelTitle(i + " " + TASK_NAME)
                    }
                }
                break; 
        }
    }
}

export default new todayPage()