export default class HomePage {
    getHomePageHeader() {
        return cy.get("#root > div > div.Pane.vertical.Pane2.js-Pane2.Pane2--home > header > h1");
    }

    getProjectButton() {
        return cy.xpath('//button[contains(text(),"Projects")]');
    }

    goToProjects() {
        this.getProjectButton()
        .click({force: true})
    }

    getSettingsButton() {
        return cy.get(".side-nav__account-controls__button button");
    }

}