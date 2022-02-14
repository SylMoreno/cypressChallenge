export class upcomingPage{

    clickEditUpcomingTaskButton(){
        cy.get('div[class=icon_menu_item__content]').contains("Edit task").click()
    }

    isTaskTitleCorrect(TASK_NAME){
        cy.get('div[role=textbox]')
        .as('tomorrowTaskName')

        cy.get('@tomorrowTaskName').invoke('text')
        .then((name) => {
            expect(name).to.equal(TASK_NAME)
            }
        )
    }

    isTaskDueCorrect(TASK_DUE){
        cy.get('span.date.date_tom')
        .as('calendarButton')

        cy.get('@calendarButton').invoke('text')
        .then((date) => {
            expect(date).to.equal(TASK_DUE)
        })
    }

    validateUpcomingTask(TASK_NAME, TASK_DUE){
        cy.get('.task_list_item').as('taskLabels')
        cy.get('@taskLabels').rightclick({force:true})
        this.clickEditUpcomingTaskButton()

        this.isTaskTitleCorrect(TASK_NAME)
        this.isTaskDueCorrect(TASK_DUE)
    }
}

export default new upcomingPage()