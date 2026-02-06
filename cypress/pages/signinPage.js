export class SignInPage {
  // ================================== LOCATOR ==================================//
  goToMainPage() {
    cy.visit("https://stockanalyzer.adenxus.com");
  }

  userNameInput() {
    return cy.get('[data-testid="auth-input-email-input"]');
  }

  passwordInput() {
    return cy.get('[data-testid="auth-input-password-input"]');
  }

  signInButton() {
    return cy.get('[data-testid="signin-submit"]');
  }

  signOutButton() {
    return cy.get('[data-testid="logout-button"]');
  }

  confirmSignOutButton() {
    return cy.get('[data-testid="logout-dialog-confirm"]');
  }

  guestUserAvatar() {
    return cy.get('[data-testid="nav-signin-desktop"]');
  }

  userAvatar() {
    return cy.get('[data-testid="nav-user-avatar"]:visible');
  }

  errorMessageInvalidSignIn() {
    return cy.get('[data-testid="signin-error"]');
  }

  //================================== ACTIONS ==================================//

  enterUsername(username) {
    this.userNameInput().click().type(username);
  }

  enterPassword(password) {
    this.passwordInput().click().type(password);
  }

  clickGuestUserAvatar() {
    this.guestUserAvatar().click();
  }

  clickSignInButton() {
    this.signInButton().click();
  }

  clickSignOutButton() {
    this.signOutButton().click();
  }

  clickConfirmSignOutButton() {
    this.confirmSignOutButton().click();
  }
}
