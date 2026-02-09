import { SignInPage } from "../../../pages/signinPage";

beforeEach(function () {
  cy.fixture("users.json").then((data) => {
    this.users = data;
  });
});

describe("User sign in success", () => {
  it("[Sign-Out-001] - User sign out success", function () {
    const signinPage = new SignInPage();
    const username = this.users.userLoginValid.username;
    const password = this.users.userLoginValid.password;

    // Go to Mains page
    signinPage.goToMainPage();

    // Go to singin page
    signinPage.clickGuestUserAvatar();

    // Enter username
    signinPage.enterUsername(username);

    // Enter password
    signinPage.enterPassword(password);

    // Click singin button
    signinPage.clickSignInButton();

    // Verify singin success by checking welcome message
    signinPage.userAvatar().should("be.visible");

    // Click avatar to show menu
    signinPage.userAvatar().click();

    // Click sign out button
    signinPage.signOutButton().click();

    // Confirm sign out
    signinPage.confirmSignOutButton().click();

    // Verify sign out by avatar should show as guest user
    signinPage.guestUserAvatar().should("be.visible");
  });
});
