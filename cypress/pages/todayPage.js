import basePage from './basePage'
import inboxPage from './inboxPage'

export class todayPage {

    getHeaderTitle(){
        cy.get('header[data-testid=view_header]').should('contain', "Today")
        return this
    }
    Selectors = {
        //headerTitle: () => cy.get('header[data-testid=view_header]'),

        //Tasks
        addTaskIcon: () => cy.get('button.plus_add_button'),
        taskTitleField: () => cy.get('div[role=textbox]'),
        taskCalendarIcon: () => cy.get('span[class=date date_today]'),
        calendarTomorrowOption: () => cy.get('div[class=scheduler-suggestions-item-label]').contains("Tomorrow"),
        taskLabel: () => cy.get('.task_list_item')
    }

    validateTaskNumber(taskLabel){
        let totalTasks = this.Selectors.taskLabel().count

        if(totalTasks == taskLabel){
            return true
        }
        else {
            return false
        }
    }

    addNewTask(TASK_NUMBER, TASK_DUE, TASK_NAME){
        let due = TASK_DUE

        switch(due){
            case "Tomorrow":
                if(TASK_NUMBER == 1){
                    basePage.Selectors.todayButton().click()
                    this.Selectors.addTaskIcon().click()
                    this.Selectors.taskTitleField().type(TASK_NAME)
                    this.Selectors.taskCalendarIcon().click()
                    this.Selectors.calendarTomorrowOption().click()
                    cy.contains("Add task").click()
                    basePage.Selectors.inboxButton().click()
                    this.validateTaskNumber(TASK_NUMBER).should('eq', true)
                }
                else{
                    for(let i = 1; i <= TASK_NUMBER; i++){
                        basePage.Selectors.todayButton().click()
                        this.Selectors.addTaskIcon().click()
                        this.Selectors.taskTitleField().type(i + " " + TASK_NAME)
                        this.Selectors.taskCalendarIcon().click()
                        this.Selectors.calendarTomorrowOption().click()
                        cy.contains("Add task").click()
                        basePage.Selectors.inboxButton().click()
                        inboxPage.Selectors.inboxTaskLabels().invoke('text').should('eq', i + " " + TASK_NAME)
                    }
                }
                break;
            case "Today":
                if(TASK_NUMBER == 1){
                    basePage.Selectors.todayButton().click()
                    this.Selectors.addTaskIcon().click()
                    this.Selectors.taskTitleField().type(TASK_NAME)
                    cy.contains("Add task").click()
                    this.validateTaskNumber(TASK_NUMBER).should('eq', true)
                }
                else{
                    basePage.Selectors.todayButton().click()

                    for(let i = 1; i <= TASK_NUMBER; i++){
                        this.Selectors.addTaskIcon().click()
                        this.Selectors.taskTitleField().type(TASK_NAME)
                        cy.contains("Add task").click()

                        this.Selectors.taskLabel().eq(-1).invoke('text').should('eq', i + " " + TASK_NAME)
                    }
                }
                break; 
        }
    }
}

export default new todayPage()