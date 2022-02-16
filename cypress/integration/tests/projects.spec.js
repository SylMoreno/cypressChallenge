import {basePage} from '../../pages/basePage'
import {loginPage} from '../../pages/loginPage'
import {projectsPage} from '../../pages/projectsPage'

const basepage = new basePage()
const projectspage = new projectsPage()
const projectData = Cypress.env('PROJECT')

describe('Projects feature test', () => {

    beforeEach(() => {
        const loginpage = new loginPage()
        loginpage.validUserLogin()
        projectspage.deleteProjects()
    })

    afterEach(() => {
        projectspage.deleteProjects()
    })

    it('Should be able to create a new project, favorite it and change its color', () => {
        basepage.createNewProject(projectData.FAVORITE.NAME, projectData.FAVORITE.COLOR, projectData.FAVORITE.IS_FAVORITE)
        /*basepage.getFavoriteProjectLabel().should('contain', projectData.FAVORITE.NAME)
        .and(*/
            projectspage.validateProject(projectData.FAVORITE.NAME, projectData.FAVORITE.COLOR)
        //)
    })

})