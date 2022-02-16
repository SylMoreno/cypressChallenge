import {basePage} from './basePage'

const basepage = new basePage()

export class projectsPage{

    clickEditProjectButton(){//project details
        cy.get('div.icon_menu_item__content').contains("Edit project").click()
        //cy.get('div[role=dialog]').invoke('show')
    }
    
    clickDeleteProjectOption(){//modal selector
        cy.get('td[data-track=projects|menu_delete]').click()
    }

    clickConfirmDeleteButton(){//modal selector
        cy.get('button').contains("Delete").click()
    }

    isNameCorrect(PROJECT_NAME){
        basepage.getProjectName()
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
                basepage.getProjectLabel().eq(0).rightclick()
                this.clickDeleteProjectOption()
                this.clickConfirmDeleteButton()
                count = basepage.getProjectLabel().count
            } while( count > 0)
        }
    }

    validateProject(PROJECT_NAME, PROJECT_COLOR){

        basepage.getFavoriteProjectLabel().rightclick()
        this.clickEditProjectButton()
            this.isNameCorrect(PROJECT_NAME)
            this.isColorCorrect(PROJECT_COLOR)
            this.isFavoriteCorrect()
        }
    }

export default new projectsPage()