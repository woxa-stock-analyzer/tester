export class LoginPage {
  userNameInput() {
    return cy.get('[data-testid="username-input"]');
  }
  passwordInput() {
    return cy.get('[data-testid="password-input"]');
  }
  loginButton() {
    return cy.contains('[id="login-button"]', "Login");
  }
  errorMessageUsername() {
    return cy.contains("Username is required");
  }

  errorMessagePassword() {
    return cy.contains("Password is required");
  }

  goToLoginPage() {
    cy.visit("https://workshop-playwright.vercel.app/");
  }

  verifyLoginSuccess() {
    return cy.get('[data-testid="page-title"]').should('contain.text', `Welcome To ODDS`);
  }

  // enterUsername(username: string) {
  //   this.userNameInput().click().type(username);
  // }

  // enterPassword(password: string) {
  //   this.passwordInput().click().type(password);
  // }

  // clickButtonLogin() {
  //   this.loginButton().click();
  // }
}
