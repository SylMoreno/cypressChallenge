import {welcomePage} from '../../pages/welcomePage'
import {loginPage} from '../../pages/loginPage'
import {todayPage} from '../../pages/todayPage'

const welcomepage = new welcomePage()
const loginpage = new loginPage()
const todaypage = new todayPage()

describe('Login feature test', () => {

    const CREDENTIALS = Cypress.env('CREDENTIALS')
    const MESSAGE = Cypress.env('ERROR_MESSAGE')

    beforeEach(() =>{
        welcomepage.access()
    })

    it('Should be able to log successfully by using valid credentials', { tags: '@smoke'}, () => {
        loginpage.submitLoginForm(CREDENTIALS.VALID_USER.MAIL, CREDENTIALS.VALID_USER.PASSWORD)
        todaypage.getHeaderTitle()
    })

    it('Should not be able to log without credentials', () => {
        loginpage.clickSubmitButton()
        loginpage.getErrorMessage(MESSAGE.INVALID_EMAIL)
    })

    it('Should not be able to log with invalid email and valid password', () => {
        loginpage.submitLoginForm(CREDENTIALS.INVALID_USER.MAIL, CREDENTIALS.VALID_USER.PASSWORD)
        loginpage.getErrorMessage(MESSAGE.INVALID_CREDENTIALS)
    })

    it('Should not be able to log with valid email and invalid password', () => {
        loginpage.submitLoginForm(CREDENTIALS.VALID_USER.MAIL, CREDENTIALS.INVALID_USER.PASSWORD)
        loginpage.getErrorMessage(MESSAGE.INVALID_CREDENTIALS)
    })
})