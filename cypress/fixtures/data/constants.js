{
    SITE = {
        SUT_URL: Cypress.env('baseUrl.UI')
    },

    CREDENTIALS = {
        VALID_USER: {
            MAIL: Cypress.env('user.VALID_USER'),
        PASSWORD: Cypress.env('user.VALID_PASSWORD')
    },
        INVALID_USER: {
            MAIL: Cypress.env('user.INVALID_USER'),
            PASSWORD: Cypress.env('user.INVALID_PASSWORD'),
            NULL_FIELD: null
        }
    },

    ERROR_MESSAGE = {
        WRONG_CREDENTIALS: Cypress.env('message.NO_CREDENTIALS'),
        MISSING_PASSWORD: Cypress.env('message.VALID_MAIL_NO_PASSWORD'),
        INVALID_CREDENTIALS: Cypress.env('messaage.INVALID_CREDENTIALS')
    }
    
    TASK = {
        SINGLE: {
            NAME: "Single task",
            NUMBER: 1,
            DUE: {
                TODAY: "Today",
                TOMORROW: "Tomorrow"
            }
        },
        
        MULTIPLE: {
            NAME: "Multiple task",
            NUMBER: 10,
            DUE: {
                TODAY: "Today",
                TOMORROW: "Tomorrow"
            }
        }
    }

    PROJECT = {
        FAVORITE: {
            NAME: "New favorite",
            COLOR: "Orange",
            IS_FAVORITE: true
        },

        NON_FAVORITE: {
            NAME: "New regular",
            COLOR: "Red",
            IS_FAVORITE: false
        }
    }
}