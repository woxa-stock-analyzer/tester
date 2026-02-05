import { LoginPage } from "../pages/signin-page";

beforeEach(function () {
  cy.fixture("users.json").then((data) => {
    this.users = data;
  });
});

describe("User sign in success", () => {
  it("[Sign-Out-001] - User sign out success", function () {
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

    // Click avatar to show menu
    loginPage.userAvatar().click();

    // Click sign out button
    loginPage.signOutButton().click();

    // Confirm sign out
    loginPage.confirmSignOutButton().click();

    // Verify sign out
    loginPage.goToLoginPageButton().should("be.visible");

    // Verify token after sign out
    loginPage.verifyTokenInLocalStorage(false);

    // For Token in httpOnly

    // cy.getCookie("access_token").should("exist");
    // cy.getCookie("refreshToken").should("exist");

    // cy.getCookie("access_token").should((cookie) => {
    //   expect(cookie).to.have.property("httpOnly", true);
    //   expect(cookie).to.have.property("secure", true);
    //   expect(cookie).to.have.property("sameSite");
    // });

    // cy.getCookie("refreshToken").should((cookie) => {
    //   expect(cookie).to.have.property("httpOnly", true);
    //   expect(cookie).to.have.property("secure", true);
    //   expect(cookie).to.have.property("sameSite");
    // });
  });
});
