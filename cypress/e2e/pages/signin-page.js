export class LoginPage {
  userNameInput() {
    return cy.get('[data-testid="auth-input-email-input"]');
  }

  passwordInput() {
    return cy.get('[data-testid="auth-input-password-input"]');
  }

  loginButton() {
    return cy.get('[data-testid="signin-submit"]');
  }

  signOutButton() {
    return cy.get('[data-testid="logout-button"]');
  }

  confirmSignOutButton() {
    return cy.get('[data-testid="logout-dialog-confirm"]');
  }

  errorMessageInvalidLogin() {
    return cy.contains(
      '[data-testid="signin-error"]',
      "email or password is invalid",
    );
  }

  errorInputBorder() {
    return cy
      .get('[data-testid="auth-input-email-input"]')
      .should("have.css", "border-color", "rgb(239, 68, 68)");
  }

  goToMainPage() {
    cy.visit("https://stockanalyzer.adenxus.com");
  }

  goToLoginPageButton() {
    return cy.get('[data-testid="nav-signin-desktop"]');
  }

  userAvatar() {
    return cy.get('[data-testid="nav-user-avatar"]:visible');
  }

  verifyLoadingThenSuccess() {
    cy.get('[data-testid="signin-submit"]').should("be.disabled");
    cy.get('[data-testid="signin-submit"]').should("be.enabled");

    return cy.get('[data-testid="nav-user-avatar"]').should("be.visible");
  }

  enterUsername(username) {
    this.userNameInput().click().type(username);
  }

  enterPassword(password) {
    this.passwordInput().click().type(password);
  }

  clickButtonLogin() {
    this.loginButton().click();
  }

  verifyTokenInLocalStorage(exist) {
    cy.window().then((win) => {
      const accessToken = win.localStorage.getItem("access_token");
      const refreshToken = win.localStorage.getItem("refreshToken");
      if(exist === true) {
        expect(accessToken, 'access_token').to.exist;
        expect(refreshToken, 'refreshToken').to.exist;
      } else {
        expect(accessToken, 'access_token').to.not.exist;
        expect(refreshToken, 'refreshToken').to.not.exist;
      }
    });
  }

  verifyTokenCookies() {
    cy.getCookie("access_token").should("exist");
    cy.getCookie("refreshToken").should("exist");

    cy.getCookie("access_token").should((cookie) => {
      expect(cookie).to.have.property("httpOnly", true);
      expect(cookie).to.have.property("secure", true);
      expect(cookie).to.have.property("sameSite");
    });

    cy.getCookie("refreshToken").should((cookie) => {
      expect(cookie).to.have.property("httpOnly", true);
      expect(cookie).to.have.property("secure", true);
      expect(cookie).to.have.property("sameSite");
    });
  }
}
