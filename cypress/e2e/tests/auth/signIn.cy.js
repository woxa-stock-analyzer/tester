import { SignInPage } from "../../../pages/signinPage";

beforeEach(function () {
  cy.fixture("users.json").then((data) => {
    this.users = data;
  });
});

describe("User sign in success", () => {
  it("[Sign-In-001] - User sign in success", function () {
    const signinPage = new SignInPage();
    const username = this.users.userLoginValid.username;
    const password = this.users.userLoginValid.password;

    // Go to Mains page
    signinPage.goToMainPage();

    // Go to signin section
    signinPage.clickGuestUserAvatar();

    // Enter username
    signinPage.enterUsername(username);

    // Enter password
    signinPage.enterPassword(password);

    // Click signin button
    signinPage.clickSignInButton();
  });
});

describe("User sign in failed", () => {
  it("Sign-In-003 - User sign in with invalid email", function () {
    const signinPage = new SignInPage();
    const username = this.users.userLoginInvalid.username;
    const password = this.users.userLoginValid.password;

    // Go to Mains page
    signinPage.goToMainPage();

    // Go to signin section
    signinPage.clickGuestUserAvatar();

    // Enter username
    signinPage.enterUsername(username);

    // Enter password
    signinPage.enterPassword(password);

    // Click signin button
    signinPage.clickSignInButton();

    // Verify error message for failed login
    signinPage.errorMessageInvalidSignIn().should("be.visible");
  });

  it("Sign-In-004 - User sign in with invalid password", function () {
    const signinPage = new SignInPage();
    const username = this.users.userLoginValid.username;
    const password = this.users.userLoginInvalid.password;

    // Go to Mains page
    signinPage.goToMainPage();

    // Go to signin section
    signinPage.clickGuestUserAvatar();

    // Enter username
    signinPage.enterUsername(username);

    // Enter password
    signinPage.enterPassword(password);

    // Click signin button
    signinPage.clickSignInButton();

    // Verify error message for failed login
    signinPage.errorMessageInvalidSignIn().should("be.visible");
  });

  it("Sign-In-005 - User sign in with invalid input", function () {
    const signinPage = new SignInPage();

    // Go to Mains page
    signinPage.goToMainPage();

    // Go to signin section
    signinPage.clickGuestUserAvatar();

    // Enter username
    signinPage.enterUsername("😊😊😊");

    // Enter password
    signinPage.enterPassword("😊😊😊");

    // Verify that the input fields are cleared or have no value
    signinPage.userNameInput().should("have.value", "");
    
    // Verify that the input fields are cleared or have no value
    signinPage.passwordInput().should("have.value", "");
  });
});
