import { SignUpPage } from "../pages/SignUp_Page";

let signUp;

beforeEach(() => {
  cy.fixture("signUp").then((data) => {
    signUp = data;
  });
});

describe('Verify sign up success', ()=> {
    // it("Verify user sign up success with JPEG valid file", () => {
    //     const SignupPage = new SignUpPage();
    //     const email = signUp.valid_user.email;
    //     const password = signUp.valid_user.password;
    //     const confirm_password = signUp.valid_user.confirm_password;
    //     const profile_picture = signUp.Picture_valid.JPEG;
    //     const dispaly_name = signUp.valid_user.dispaly_name;

    //     SignupPage.goToSignUpPage();
    //     SignupPage.ClickSignInButton();
    //     SignupPage.ClickSignUpLink();
    //     SignupPage.emailInput().type(email);
    //     SignupPage.passwordInput().type(password);
    //     SignupPage.confirmPasswordInput().type(confirm_password);
    //     SignupPage.nextButton();
    //     SignupPage.VerifyRedirectToUserSettingPage();
    //     SignupPage.selectProfilePicture(profile_picture);
    //     SignupPage.dispalyNameInput().type(dispaly_name);
    //     SignupPage.createAccountButton();
    //     SignupPage.VerifySignUpSuccessWithPic();

    // });

    //     it("Verify sign up success with PNG valid file", () => {
    //     const SignupPage = new SignUpPage();
    //     const email = signUp.valid_user.email;
    //     const password = signUp.valid_user.password;
    //     const confirm_password = signUp.valid_user.confirm_password;
    //     const profile_picture = signUp.Picture_valid.PNG;
    //     const dispaly_name = signUp.valid_user.dispaly_name;

    //     SignupPage.goToSignUpPage();
    //     SignupPage.ClickSignInButton();
    //     SignupPage.ClickSignUpLink();
    //     SignupPage.emailInput().type(email);
    //     SignupPage.passwordInput().type(password);
    //     SignupPage.confirmPasswordInput().type(confirm_password);
    //     SignupPage.nextButton();
    //     SignupPage.VerifyRedirectToUserSettingPage();
    //     SignupPage.selectProfilePicture(profile_picture);
    //     SignupPage.dispalyNameInput().type(dispaly_name);
    //     SignupPage.createAccountButton();
    //     SignupPage.VerifySignUpSuccessWithPic();

    // });

    //     it("Verify sign up success with  no picture", () => {
    //     const SignupPage = new SignUpPage();
    //     const email = signUp.valid_user.email;
    //     const password = signUp.valid_user.password;
    //     const confirm_password = signUp.valid_user.confirm_password;
    //     const dispaly_name = signUp.valid_user.dispaly_name;

    //     SignupPage.goToSignUpPage();
    //     SignupPage.ClickSignInButton();
    //     SignupPage.ClickSignUpLink();
    //     SignupPage.emailInput().type(email);
    //     SignupPage.passwordInput().type(password);
    //     SignupPage.confirmPasswordInput().type(confirm_password);
    //     SignupPage.nextButton();
    //     SignupPage.VerifyRedirectToUserSettingPage();
    //     SignupPage.dispalyNameInput().type(dispaly_name);
    //     SignupPage.createAccountButton();
    //     SignupPage.VerifySignUpSuccessWithNoPic();

    // });

    it('find button', function() {
            cy.visit('http://157.85.98.99:3030/markets')
            
    });

})



    describe('Verify sign up failed', ()=> {
    it("Verify user sign up failed with invalid email format.", () => {
        const SignupPage = new SignUpPage();
        const email = signUp.invalid_email_format.email;
        const password = signUp.invalid_email_format.password;
        const confirm_password = signUp.invalid_email_format.confirm_password;

        SignupPage.goToSignUpPage();
        SignupPage.ClickSignInButton();
        SignupPage.ClickSignUpLink();
        SignupPage.emailInput().type(email);
        SignupPage.passwordInput().type(password);
        SignupPage.confirmPasswordInput().type(confirm_password);
        SignupPage.VerifySignUpFailedwithInvalidEmailFormat();
        SignupPage.nextButton();
        
    });
        it("Verify user sign up failed with duplicate email.", () => {
        const SignupPage = new SignUpPage();
        const email = signUp.duplicate_email.email;
        const password = signUp.duplicate_email.password;
        const confirm_password = signUp.duplicate_email.confirm_password;
        SignupPage.goToSignUpPage();

        SignupPage.goToSignUpPage();
        SignupPage.ClickSignInButton();
        SignupPage.ClickSignUpLink();
        SignupPage.emailInput().type(email);
        SignupPage.passwordInput().type(password);
        SignupPage.confirmPasswordInput().type(confirm_password);
        SignupPage.nextButton();
        SignupPage.VerifySignUpFailedwithDuplicateEmail();
    })

        it("Verify user sign up failed with invalid password least than 8 characters.", () => {
        const SignupPage = new SignUpPage();
        const email = signUp.invalid_password_least_than_8.email;
        const password = signUp.invalid_password_least_than_8.password;
        const confirm_password = signUp.invalid_password_least_than_8.confirm_password;
        SignupPage.goToSignUpPage();

        SignupPage.goToSignUpPage();
        SignupPage.ClickSignInButton();
        SignupPage.ClickSignUpLink();
        SignupPage.emailInput().type(email);
        SignupPage.passwordInput().type(password);
        SignupPage.confirmPasswordInput().type(confirm_password);
        SignupPage.nextButton();

        SignupPage.VerifySignUpFailedwithInvalidPasswordLeastThan8();
    })

        it("Verify user sign up failed with password don’t have letter.", () => {
        const SignupPage = new SignUpPage();
        const email = signUp.invalid_password_no_have_letter.email;
        const password = signUp.invalid_password_no_have_letter.password;
        const confirm_password = signUp.invalid_password_no_have_letter.confirm_password;
        SignupPage.goToSignUpPage();

        SignupPage.goToSignUpPage();
        SignupPage.ClickSignInButton();
        SignupPage.ClickSignUpLink();
        SignupPage.emailInput().type(email);
        SignupPage.passwordInput().type(password);
        SignupPage.confirmPasswordInput().type(confirm_password);
        SignupPage.nextButton();

        SignupPage.VerifySignUpFailedwithPasswordDontHaveLetters();

    })

        it("Verify user sign up failed with password don’t have numberic.", () => {
        const SignupPage = new SignUpPage();
        const email = signUp.invalid_password_no_have_number.email;
        const password = signUp.invalid_password_no_have_number.password;
        const confirm_password = signUp.invalid_password_no_have_number.confirm_password;
        SignupPage.goToSignUpPage();

        SignupPage.goToSignUpPage();
        SignupPage.ClickSignInButton();
        SignupPage.ClickSignUpLink();
        SignupPage.emailInput().type(email);
        SignupPage.passwordInput().type(password);
        SignupPage.confirmPasswordInput().type(confirm_password);
        SignupPage.nextButton();

        SignupPage.VerifySignUpFailedwithPasswordDontHaveNumbers;
    })

            it("Verify user sign up failed with password have special character.", () => {
        const SignupPage = new SignUpPage();
        const email = signUp.invalid_password_have_special_character.email;
        const password = signUp.invalid_password_have_special_character.password;
        const confirm_password = signUp.invalid_password_have_special_character.confirm_password;
        SignupPage.goToSignUpPage();

        SignupPage.goToSignUpPage();
        SignupPage.ClickSignInButton();
        SignupPage.ClickSignUpLink();
        SignupPage.emailInput().type(email);
        SignupPage.passwordInput().type(password);
        SignupPage.confirmPasswordInput().type(confirm_password);
        SignupPage.nextButton();

        SignupPage.VerifySignUpFailedwithPasswordHaveSpecialCharacter();
    })

        it("Verify user sign up failed with password mismatch.", () => {
        const SignupPage = new SignUpPage();
        const email = signUp.invalid_confirm_password_not_match.email;
        const password = signUp.invalid_confirm_password_not_match.password;
        const confirm_password = signUp.invalid_confirm_password_not_match.confirm_password;
        SignupPage.goToSignUpPage();

        SignupPage.ClickSignInButton();
        SignupPage.ClickSignUpLink();
        SignupPage.emailInput().type(email);
        SignupPage.passwordInput().type(password);
        SignupPage.confirmPasswordInput().type(confirm_password);
        SignupPage.nextButton();

        SignupPage.VerifySignUpFailedwithPasswordMismatch(); 
})

        it("Verify user sign up failed with confirm password empty field.", () => {
        const SignupPage = new SignUpPage();
        const email = signUp.invalid_confirm_password_empty.email;
        const password = signUp.invalid_confirm_password_empty.password;
        // const confirm_password = signUp.invalid_confirm_password_empty.confirm_password;
        SignupPage.goToSignUpPage();

        SignupPage.ClickSignInButton();
        SignupPage.ClickSignUpLink();
        SignupPage.emailInput().type(email);
        SignupPage.passwordInput().type(password);
        SignupPage.confirmPasswordInput().clear();
        SignupPage.nextButton();

        SignupPage.VerifySignUpFailedwithConfirmPasswordEmptyField(); 
})

        it("Verify user sign up failed with empty email.", () => {
        const SignupPage = new SignUpPage();
        const email = signUp.invalid_email_empty.email;
        const password = signUp.invalid_email_empty.password;
        const confirm_password = signUp.invalid_email_empty.confirm_password;
        SignupPage.goToSignUpPage();

        SignupPage.ClickSignInButton();
        SignupPage.ClickSignUpLink();
        SignupPage.emailInput().clear();
        SignupPage.passwordInput().type(password);
        SignupPage.confirmPasswordInput().type(confirm_password);
        SignupPage.nextButton();

        SignupPage.VerifySignUpFailedwithEmptyEmail(); 
})

        it("Verify user sign up failed with email emoji.", () => {
        const SignupPage = new SignUpPage();
        const email = signUp.invalid_email_emoji.email;
        const password = signUp.invalid_email_emoji.password;
        const confirm_password = signUp.invalid_email_emoji.confirm_password;
        SignupPage.goToSignUpPage();

        SignupPage.ClickSignInButton();
        SignupPage.ClickSignUpLink();
        SignupPage.emailInput().type(email);
        SignupPage.passwordInput().type(password);
        SignupPage.confirmPasswordInput().type(confirm_password);
        SignupPage.nextButton();
        SignupPage.VerifySignUpFailedwithEmailEmoji(); 
})

        it("Verify user sign up failed empty password.", () => {
        const SignupPage = new SignUpPage();
        const email = signUp.invalid_password_empty.email;
        const password = signUp.invalid_password_empty.password;
        const confirm_password = signUp.invalid_password_empty.confirm_password;
        SignupPage.goToSignUpPage();

        SignupPage.ClickSignInButton();
        SignupPage.ClickSignUpLink();
        SignupPage.emailInput().type(email);
        SignupPage.passwordInput().clear();
        SignupPage.confirmPasswordInput().type(confirm_password);
        SignupPage.nextButton();
        SignupPage.VerifySignUpFailedwithEmptyPassword(); 
})

})


    describe('Verify sign up failed in user setting', ()=> {

          it("Verify user sign up success with display name no english language", () => {
        const SignupPage = new SignUpPage();
        const email = signUp.invalid_name_not_Eng.email;
        const password = signUp.invalid_name_not_Eng.password;
        const confirm_password = signUp.invalid_name_not_Eng.confirm_password;
        const dispaly_name = signUp.invalid_name_not_Eng.dispaly_name;

        SignupPage.goToSignUpPage();
        SignupPage.ClickSignInButton();
        SignupPage.ClickSignUpLink();
        SignupPage.emailInput().type(email);
        SignupPage.passwordInput().type(password);
        SignupPage.confirmPasswordInput().type(confirm_password);
        SignupPage.nextButton();
        SignupPage.VerifyRedirectToUserSettingPage();
        SignupPage.dispalyNameInput().type(dispaly_name);
        SignupPage.createAccountButton();
        SignupPage.VerifySignUpFailedwithInvalidNameNoEng();

    })

    
        it("Verify user sign up success with display name less than 5 characters", () => {
        const SignupPage = new SignUpPage();
        const email = signUp.invalid_name_least_than_5.email;
        const password = signUp.invalid_name_least_than_5.password;
        const confirm_password = signUp.invalid_name_least_than_5.confirm_password;
        const dispaly_name = signUp.invalid_name_least_than_5.dispaly_name;

        SignupPage.goToSignUpPage();
        SignupPage.ClickSignInButton();
        SignupPage.ClickSignUpLink();
        SignupPage.emailInput().type(email);
        SignupPage.passwordInput().type(password);
        SignupPage.confirmPasswordInput().type(confirm_password);
        SignupPage.nextButton();
        SignupPage.VerifyRedirectToUserSettingPage();
        SignupPage.dispalyNameInput().type(dispaly_name);
        SignupPage.createAccountButton();
        SignupPage.VerifySignUpFailedwithInvalidNameLessThan5Chars();

    })

        it("Verify user sign up success with display name have special characters", () => {
        const SignupPage = new SignUpPage();
        const email = signUp.invalid_name_have_special_characters.email;
        const password = signUp.invalid_name_have_special_characters.password;
        const confirm_password = signUp.invalid_name_have_special_characters.confirm_password;
        const dispaly_name = signUp.invalid_name_have_special_characters.dispaly_name;

        SignupPage.goToSignUpPage();
        SignupPage.ClickSignInButton();
        SignupPage.ClickSignUpLink();
        SignupPage.emailInput().type(email);
        SignupPage.passwordInput().type(password);
        SignupPage.confirmPasswordInput().type(confirm_password);
        SignupPage.nextButton();
        SignupPage.VerifyRedirectToUserSettingPage();
        SignupPage.dispalyNameInput().type(dispaly_name);
        SignupPage.createAccountButton();
        SignupPage.VerifySignUpFailedwithInvalidNameHaveSpecialCharacters();

    })

        it("Verify user sign up success with display name empty", () => {
        const SignupPage = new SignUpPage();
        const email = signUp.invalid_name_empty.email;
        const password = signUp.invalid_name_empty.password;
        const confirm_password = signUp.invalid_name_empty.confirm_password;

        SignupPage.goToSignUpPage();
        SignupPage.ClickSignInButton();
        SignupPage.ClickSignUpLink();
        SignupPage.emailInput().type(email);
        SignupPage.passwordInput().type(password);
        SignupPage.confirmPasswordInput().type(confirm_password);
        SignupPage.nextButton();
        SignupPage.VerifyRedirectToUserSettingPage();
        SignupPage.dispalyNameInput().clear();
        SignupPage.createAccountButton();
        SignupPage.VerifySignUpFailedwithEmptyDisplayName();

    })



})












