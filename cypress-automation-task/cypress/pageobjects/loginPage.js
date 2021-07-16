export default class LoginPage {
   
    getEmailField() {
        return cy.get("#email");
    }

    getPasswordField() {
        return cy.get("#password");
    }

    getLoginBtn() {
        return cy.xpath('//*[@id="root"]/main/div[2]/div/div/div/form/div[3]/button');
    }

    loginUser(username,password) {
        cy.visit('/login');
        this.getEmailField().type(username);
        this.getPasswordField().type(password);
        this.getLoginBtn().click();
    }
}