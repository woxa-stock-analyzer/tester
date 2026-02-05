import { LoginPage } from "../pages/signin-page";

beforeEach(function () {
  cy.fixture("users.json").then((data) => {
    this.users = data;
  });
});

describe("User sign in success", () => {
  it("[Sign-In-001] - User sign in success", function () {
    const loginPage = new LoginPage();
    const username = this.users.userLoginValid.username;
    const password = this.users.userLoginValid.password;

    // Go to Mains page
    loginPage.goToMainPage();

    // Go to login page
    loginPage.goToLoginPageButton().click();

    // Enter username
    loginPage.enterUsername(username);

    // Enter password
    loginPage.enterPassword(password);

    // Click login button
    loginPage.clickButtonLogin();

    // Verify login success by checking welcome message
    loginPage.userAvatar().should("be.visible");

    // Verify loading then success state
    // Now cannot do in httpOnly
    loginPage.verifyTokenInLocalStorage(true);

  });
});

describe("User sign in failed", () => {
  it("Sign-In-003 - User sign in with invalid email", function () {
    const loginPage = new LoginPage();
    const username = this.users.userLoginInvalid.username;
    const password = this.users.userLoginValid.password;

    // Go to Mains page
    loginPage.goToMainPage();

    // Go to login page
    loginPage.goToLoginPageButton().click();

    // Enter username
    loginPage.enterUsername(username);

    // Enter password
    loginPage.enterPassword(password);

    // Click login button
    loginPage.clickButtonLogin();

    // Verify error message for failed login
    loginPage.errorMessageInvalidLogin().should("be.visible");
  });

  it("Sign-In-004 - User sign in with invalid password", function () {
    const loginPage = new LoginPage();
    const username = this.users.userLoginValid.username;
    const password = this.users.userLoginInvalid.password;

    // Go to Mains page
    loginPage.goToMainPage();

    // Go to login page
    loginPage.goToLoginPageButton().click();

    // Enter username
    loginPage.enterUsername(username);

    // Enter password
    loginPage.enterPassword(password);

    // Click login button
    loginPage.clickButtonLogin();

    // Verify error message for failed login
    loginPage.errorMessageInvalidLogin().should("be.visible");
  });

  it("Sign-In-005 - User sign in with invalid input", function () {
    const loginPage = new LoginPage();

    // Go to Mains page
    loginPage.goToMainPage();

    // Go to login page
    loginPage.goToLoginPageButton().click();

    // Enter username
    loginPage.enterUsername("😊😊😊");

    // Enter password
    loginPage.userNameInput().should('have.value', '');
  });
});
