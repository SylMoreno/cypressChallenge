# cypressChallenge
This repo is meant to reproduce what was done for QA Bootcamp, but using cypress framework

## Initialize the project in your computer
- Create a folder where to allocate project and open it (you can use git bash or IDE console)
- Type in your console: npm init

## How to install Node.js (use git bash or IDE console)
- Go to https://nodejs.org/en/
- Install recommended version (because it's more stable)

## How to install Cypress (if needed, using git bash or IDE console)
- In your console, type the following command: npm install cypress --save-dev

## How to install .env
- Type in your console: npm install dotenv
###### To confirm correct installation:
- Type in your console: node -v (node version must be displayed on screen)
- Go to package.json and find 'devDependencies' row. There must be "cypress": "[your version]" 

###### Using page-object-model structure, you’ll find the following structure:
* cypress
  * data -> As the name indicates, is data who doesn’t change. Is static.
    * Constants
  * fixtures -> Here are all scripts used to test features.
  * pages -> CSS Selectors according to the indicated screen.
  * plugins -> Here you're gonna set your .env
  * support
    * commands -> If necessary, all your cypress native custom functions are going to be nested here
    * index -> If necessary, you can put here global configs that could modify Cypress
  * Reports

## Feature testing scripts
1. Use `run-all-tests` to run all tests, headless mode
2. Use `login-feature-chrome` to perform all login tests available (chrome browser, headless mode)
3. Use `login-feature-multibrowser`to perform all login tests with chrome, firefox and safari browsers
4. Use `add-NewTask-feature` to perform all *create new tasks*' tests requested (chrome browser)
5. Use `add-NewProject-feature` to perform all *create new project* test requested (chrome browser)
6. Use `test-smoke` to only run tests with type="smoke"
7. Use `newman`to run API testing
8. Use `lint-init`to initialize lint
9. Use `lint` for perform static analysis

## Be aware to create your own .env file pom level. The following constants are used:
- `BASE_URL=https://www.todoist.com/`
- `VALID_MAIL=youremail@email.com. (create an account before start)`
- `VALID_PASSWORD=yourpassword`
