export class SignUpPage {

  goToSignUpPage() {
    cy.visit("http://157.85.98.99:3030/markets");
  }
  ClickSignInButton() {
    return   cy.get('[data-testid="nav-signin-desktop"]')
    .should('be.visible')
    .click();
  }
  ClickSignUpLink() {
    return cy.get('[data-testid="signin-show-signup"]').click();
  }
  emailInput() {
    return cy.get('[data-testid="sign-up-email-input-input"]').click();
  }
  passwordInput() {
    return cy.get('[data-testid="sign-up-password-input-input"]').click();
  }
  confirmPasswordInput() {
    return cy.get('[data-testid="sign-up-confirm-password-input-input"]').click();
  }
  nextButton() {
    return cy.get('[data-testid="sign-up-next"]').click();
  }
  selectProfilePicture(filePath) {
    return cy.get('[data-testid="sign-up-profile-select-button"]').selectFile(filePath, { force: true });
  }
  dispalyNameInput() {
    return cy.get('[data-testid="sign-up-display-name-input-input"]').click();
  }
  createAccountButton() {
    return cy.get('[data-testid="sign-up-submit"]').click();
  }




  //Verify ต่างๆ
  VerifyRedirectToUserSettingPage() {
    cy.get('h2')
    .should('be.visible')
    .and('contain.text', 'Finish creating your Stock Analyzer account');
  }
VerifySignUpSuccessWithPic() {
  cy.get('[data-testid="nav-user-avatar"]')
    .should('be.visible')
    .and('have.attr', 'src')
    .and('include', 'stockanalyzer-s3');
}

VerifySignUpSuccessWithNoPic(dispaly_name) {
  const firstChar = dispaly_name.trim().charAt(0).toUpperCase();

  cy.get('[data-testid="nav-user-initial"]')
    .should('be.visible')
    .invoke('text')
    .should('eq', firstChar);
}


VerifySignUpFailedwithInvalidEmailFormat() {
  cy.get('[data-testid="sign-up-email-input-error"]')
    .should('be.visible')
    .and('have.text', 'The format of this email address is invalid.');
}

  VerifySignUpFailedwithDuplicateEmail() {
      cy.get('[data-testid="sign-up-email-input-error"]')
    .should('be.visible')
    .and('have.text', 'This email address has already been taken.');
  }
  VerifySignUpFailedwithInvalidPasswordLeastThan8() {
      cy.get('[data-testid="sign-up-password-input-error"]')
    .should('be.visible')
    .and('have.text', 'Invalid');

      cy.get('[data-testid="password-requirement-min-length-text"]')
    .should('contain.text', 'Must be at least 8 characters long')
    .and('have.class', 'text-[12px] font-normal text-error-500');
  }

  VerifySignUpFailedwithPasswordDontHaveLetters() {
      cy.get('[data-testid="sign-up-password-input-error"]')
    .should('be.visible')
    .and('have.text', 'Invalid');

      cy.get('[data-testid="password-requirement-has-letter-text"]')
    .should('contain.text', 'Must contain (A-Z or a-z)')
    .and('have.class', 'text-[12px] font-normal text-error-500');
  }


  VerifySignUpFailedwithPasswordDontHaveNumbers() {
      cy.get('[data-testid="sign-up-password-input-error"]')
    .should('be.visible')
    .and('have.text', 'Invalid');

      cy.get('[data-testid="password-requirement-has-number"]')
    .should('contain.text', 'Must contain at least 1 number (0-9)')
    .and('have.class', 'text-[12px] font-normal text-error-500');
  }


  VerifySignUpFailedwithPasswordHaveSpecialCharacter() {
         cy.get('[data-testid="sign-up-password-input-error"]')
    .should('be.visible')
    .and('have.text', 'Invalid');

      cy.get('[data-testid="password-requirement-no-special-text"]')
    .should('contain.text', 'Must not contain special characters (!@#$%^&*)')
    .and('have.class', 'text-[12px] font-normal text-error-500');
  }
  VerifySignUpFailedwithPasswordMismatch() {
      cy.get('[data-testid="sign-up-confirm-password-input-error"]')
    .should('be.visible')
    .and('have.text', 'Passwords do not match.');
  }
  VerifySignUpFailedwithConfirmPasswordEmptyField() {
      cy.get('[data-testid="sign-up-confirm-password-input-error"]')
    .should('be.visible')
    .and('have.text', 'Invalid');
  }
  VerifySignUpFailedwithEmptyEmail() {
    return cy.get('[data-testid="sign-up-email-input-error"]')
    .should('be.visible')
    .and('have.text', 'Email is required');
  }
  VerifySignUpFailedwithEmailEmoji() {
        return cy.get('[data-testid="sign-up-email-input-error"]')
    .should('be.visible')
    .and('have.text', 'Email is required');
  }

    VerifySignUpFailedwithEmptyPassword() {
        return cy.get('[data-testid="sign-up-password-input-error"]')
    .should('be.visible')
    .and('have.text', 'Password is required.');
  }

    VerifySignUpFailedwithInvalidNameNoEng() {
      cy.get('[data-testid="sign-up-display-name-input-input"]')
      .get('[aria-invalid="true"]')
      .should('be.visible')
    
      cy.get('[data-testid="displayname-requirement-english-only-text"]')
    .should('contain.text', 'English language only.')
    .and('have.class', 'text-[12px] font-normal text-red-500');
  }

      VerifySignUpFailedwithInvalidNameLessThan5Chars() {
      cy.get('[data-testid="sign-up-display-name-input-input"]')
      .get('[aria-invalid="true"]')
      .should('be.visible')
    

      cy.get('[data-testid="displayname-requirement-min-length-text"]')
    .should('contain.text', 'Must be at least 5 characters long')
    .and('have.class', 'text-[12px] font-normal text-red-500');
  }

        VerifySignUpFailedwithInvalidNameHaveSpecialCharacters() {
      cy.get('[data-testid="sign-up-display-name-input-input"]')
      .get('[aria-invalid="true"]')
      .should('be.visible')
    
      cy.get('[data-testid="displayname-requirement-english-only-text"]')
    .should('contain.text', 'English language only.')
    .and('have.class', 'text-[12px] font-normal text-red-500');
      
    cy.get('[data-testid="displayname-requirement-no-special-text"]')
      .should('contain.text', 'Must not contain special characters (!@#$%^&*)')
      .and('have.class', 'text-[12px] font-normal text-red-500');
    
  }

      VerifySignUpFailedwithEmptyDisplayName() {
        return cy.get('[data-testid="sign-up-display-name-input-error"]')
      .should('be.visible')
      .and('have.text', 'Invalid');
  }
}
