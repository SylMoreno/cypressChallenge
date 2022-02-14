import {basePage} from '../../pages/basePage'
import {loginPage} from '../../pages/loginPage'
import {todayPage} from '../../pages/todayPage'
import {inboxPage} from '../../pages/inboxPage'

const todaypage = new todayPage()
const basepage = new basePage()
const taskData = Cypress.env('TASK')

describe('Tasks feature test', () => {

    beforeEach(() => {
        const loginpage = new loginPage()

        loginpage.validUserLogin()
    })

    afterEach(() => {
        const inboxpage = new inboxPage()

        inboxpage.deleteAllTasks()
    })

    it('Should create a new task with TODAY as due date', () => {
        todaypage.addNewTask(taskData.SINGLE.NUMBER, taskData.SINGLE.DUE.TODAY, taskData.SINGLE.NAME)
        todaypage.validateTaskLabelTitle(taskData.SINGLE.NAME)
    })

    it('Should create MULTIPLE tasks with TODAY as due date', () => {
        todaypage.addNewTask(taskData.MULTIPLE.NUMBER, taskData.MULTIPLE.DUE.TODAY, taskData.MULTIPLE.NAME)
        todaypage.validateTaskNumber(taskData.MULTIPLE.NUMBER)
    })

    it.only('Should create a new task with TOMORROW as due date', () => {
        todaypage.addNewTask(taskData.SINGLE.NUMBER, taskData.SINGLE.DUE.TOMORROW, taskData.SINGLE.NAME)
        basepage.clickMenuOption("Upcoming")
    })
})