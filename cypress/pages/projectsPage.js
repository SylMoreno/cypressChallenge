import {basePage} from './basePage'

const basepage = new basePage()

export class projectsPage{

    clickEditProjectButton(){//project details
        cy.get('li[role=menuitem]').find('div').contains("Edit project").click()
        cy.get('div[role=dialog]').invoke('show')
    }
    
    clickDeleteProjectOption(){//modal selector
        cy.get('td[data-track=projects|menu_delete]').click()
    }

    clickConfirmDeleteButton(){//modal selector
        cy.get('button').contains("Delete").click()
    }

    isNameCorrect(PROJECT_NAME){
        basepage.getProjectName().invoke('text')
        .then((name) => {
            expect(name).to.equal(PROJECT_NAME)
        })
    }

    isColorCorrect(PROJECT_COLOR){
        cy.get('button.color_dropdown_toggle.form_field_control').as('selectedColor')
        cy.get('@selectedColor').invoke('text')
        .then((color) => {
            expect(color).to.equal(PROJECT_COLOR)
        })
    }

    isFavoriteCorrect(){
        basepage.getFavoriteToggle().invoke('class')
        .then((toggle) => {
            expect(toggle).to.have.class('reactist_switch--checked')
        })
    }

    deleteProjects(){
        let count = basepage.getProjectLabel().count

        if(count > 0){
            do{
                basepage.getProjectLabel().eq(count-1).rightclick()
                this.clickDeleteProjectOption()
                this.clickConfirmDeleteButton()
                count = basepage.getProjectLabel().count
            } while( count > 0)
        }
    }

    validateProject(PROJECT_NAME, PROJECT_COLOR, isFavorite = false){
        let favFlag = isFavorite

        basepage.getProjectLabel().rightclick()
        this.clickEditProjectButton()
        cy.wait(2000)

        this.isNameCorrect(PROJECT_NAME)
        this.isColorCorrect(PROJECT_COLOR)
        this.isFavoriteCorrect()

        /*let target = {
            name: basepage.Selectors.projectName().value,
            color: basepage.Selectors.colorList().innerText,
            isFavorite: basepage.favoriteToggle().hasClass('reactist_switch--checked')
        }

        if(target.name == PROJECT_NAME && target.color == PROJECT_COLOR && target.isFavorite == favFlag){
            return true
        }
        else {
            return false
        }*/
    }
}

export default new projectsPage()