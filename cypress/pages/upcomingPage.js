class upcomingPage{

    Selectors = {
        taskLabels: () => cy.get('.task_list_item'),
        editUpcomingTaskButton: () => cy.get('div[class=icon_menu_item__content]').contains("Edit task"),
        tomorrowTaskName: () => cy.get('div[class=public-DraftStyleDefault-block public-DraftStyleDefault-ltr]'),
        calendarButton: () => cy.get('span[class=date date_tom]')
    }

    validateAddedTasks(TASK_NAME, TASK_DUE){
        this.Selectors.taskLabels().rightClick()
        this.Selectors.editUpcomingTaskButton().click()

        let target = {
            name: this.Selectors.tomorrowTaskName().innerText,
            date: this.Selectors.calendarButton().innerText
        }

        if(target.name == TASK_NAME && target.date == TASK_DUE){
            return true
        }
        else{
            return false
        }
    }
}

modules.exports = new upcomingPage()