require('dotenv').config()

module.exports = (on, config) => {
    SITE = {
        SUT_URL: process.env.BASE_URL
    },

    CREDENTIALS = {
        VALID_USER: {
            MAIL: process.env.VALID_MAIL,
        PASSWORD: process.env.VALID_PASSWORD
    },
        INVALID_USER: {
            MAIL: "invalid-mail@dummy.com",
            PASSWORD: "superwongPass00",
            NULL_FIELD: null
        }
    },

    ERROR_MESSAGE = {
        WRONG_CREDENTIALS: "Wong emailor  password.",
        MISSING_PASSWORD: "Blank password.",
        INVALID_EMAIL: "Invalid email address."
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