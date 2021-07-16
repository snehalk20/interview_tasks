import LoginPage from '../../pageobjects/loginPage';
import HomePage from '../../pageobjects/homePage';
import ProjectsPage from '../../pageobjects/projectsPage';

let loginPage = new LoginPage();
let homePage = new HomePage();
let projectPage = new ProjectsPage();
const {
    Before,
    Given,
    Then
  } = require("cypress-cucumber-preprocessor/steps");
var obj;
var project;

Before(() => {
    cy.fixture('testdata/data.json').as('data');
    cy.get('@data').then((value) => {
        obj = value;
    })
})

Given('I login as a Precreated User', () => {
    console.log(obj);
    loginPage.loginUser(obj.username, obj.password);
})

Given('I am logged in successfully', () => {
    homePage.getHomePageHeader().should('have.text',"Home");
})

When('I go to Projects page', () => {
    homePage.goToProjects();
})

When('create a new project', () => {
    projectPage.getNewProjectBtn().click();
})

When('enter a project name {string}', (projectName) => {
    projectPage.getInputName().type(projectName);
})

When('enter a project description {string}', (projectDesc) => {
    projectPage.getInputDescription().type(projectDesc);
})

When('save the project', () => {
    projectPage.getAddBtn().click();
    cy.wait(1000);
    projectPage.getDuplicateProjectErrorMsg().should('not.exist');
})

Then('the project {string} is created and listed successfully', (projectName) => {
    projectPage.getProjectHeadlineName().should('include.text',projectName);
    project = projectName;
})


Given('the project is already created', () => {
    homePage.goToProjects();
    projectPage.navigateToProject(project);
})

When('I create a simulation {string} for the created project', (simulation) => {
    projectPage.createSimulation(simulation);
})

Then('the simulation {string} is created and listed successfully', (simulation) => {
    projectPage.getDuplicateSimulationErrorMsg().should('not.exist');
    homePage.goToProjects();
    projectPage.getSimulationName().should('include.text',simulation);
    
})
