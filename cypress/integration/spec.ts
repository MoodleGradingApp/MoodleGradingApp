it('Loads homepage', () => {
  // Navigate to the home page
  cy.visit('/');

  // Test to see if the name of the application appears on home page
  cy.contains('Grading Assistant');
});

it('Input Assignment Name', () => {
  // Type assignment name
  cy.get('[data-testid="nameInput"]').type('Vaccine Clinic');
});

it('Input Max Score', () => {
  cy.get('[data-testid="maxPointsInput"]').type('50');
});

it('Add Feedback', () => {
  // Type feedback
  cy.get('[data-testid=feedbackInput]').type('Show your work!');

  // Type deduction score
  cy.get('[data-testid=deductionInput]').type('5');

  // Press 'Add Feedback' button for new input line
  // TEMPORARY loop because doesn't add until clicked 4 times
  for( let n = 0; n < 4; n++) {
    cy.get('[data-testid=addFeedbackBtn]').click();
  }
});

it('Delete Feedback', () => {
  // Delete all feedback
  //cy.get('[data-testid="trashBtn"]').click({ multiple: true });

  // TEMPORARY spread to expand the feedback array
  // Press delete buttoms from the bottom up 
  cy.get('[data-testid="trashBtn"]').spread((first, second, third, fourth, fifth) => {
    fifth.click();
    fourth.click();
    third.click();
  })
});

it('Add Feedback', () => {
  // Enter new feedback and deduction score in the bottom input box
  cy.get('[data-testid=feedbackInput]').last().type('Add comments!');
  cy.get('[data-testid=deductionInput]').last().type('3');

  // Press 'Add Feedback' button for new input line
  cy.get('[data-testid=addFeedbackBtn]').click();

  // Enter new feedback and deduction in the bottom input box
  cy.get('[data-testid=feedbackInput]').last().type('Code does not compile :(');
  cy.get('[data-testid=deductionInput]').last().type('20');

  // Press 'Add Feedback' button for new input line
  cy.get('[data-testid=addFeedbackBtn]').click();
});

it('Delete the first feedback option', () => {
  cy.get('[data-testid="trashBtn"]').spread((first) => {
    first.click();
  })
});

