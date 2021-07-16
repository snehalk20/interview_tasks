export default class ProjectsPage {
    getNewProjectBtn() {
        return cy.get('.button__label').contains('new project');
    }

    getInputName() {
        return cy.get("#input-field-name");
    }

    getInputDescription() {
        return cy.get("#textarea-field-nameTextArea");
    }

    getAddBtn() {
        return cy.get('.button__label').contains('Add');
    }

    getProjectHeadlineName() {
        return cy.get(".saved-project__list .saved-project__headline__name__text");
    }

    getDuplicateProjectErrorMsg() {
        return cy.get('.GraphQLErrorDisplay__error-msg');
    }

    navigateToProject(projectName) {
        this.getProjectHeadlineName().first().click({force: true});
    }

    getSimulationBtn() {
        return cy.get('.saved-project__button--new-simulation');
    }

    getAddSimulation() {
        return cy.get('.button');
    }

    getSimulationName() {
        return cy.get('p');
    }

    createSimulation(simulation) {
        this.getSimulationBtn().click();
        this.getInputName().clear();
        this.getInputName().type(simulation);
        this.getAddSimulation().click();
    }

    getDuplicateSimulationErrorMsg() {
        return cy.get('.projectUUID .nativeSelect__error-msg');
    }

}