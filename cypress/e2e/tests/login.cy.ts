import { LoginPage } from "@pages/login-page"

let users: any;

beforeEach(() => {
  cy.fixture("users.json").then((data) => {
    users = data;
  });
});


describe('User login success', ()=> {
    it("[LOG-001] - login success with username and password", () => {
        const loginPage = new LoginPage();
        const username = users.userLogin001.username;
        const password = users.userLogin001.password;
        
        
        // Go to login page
        loginPage.goToLoginPage();

        // Enter username
        loginPage.enterUsername(username);

        // Enter password
        loginPage.enterPassword(password);

        // Click login button
        loginPage.clickButtonLogin();

        // Verify login success by checking welcome message
        loginPage.verifyLoginSuccess();
    })
})