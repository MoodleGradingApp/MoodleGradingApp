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

it('Add Feedback', () => {
  // Type feedback
  cy.get('[data-testid=feedbackInput]').type('Show your work!');

  // Type deduction score
  cy.get('[data-testid=deductionInput]').type('5');

  // Press 'Add Feedback' button for new input line
  cy.get('[data-testid=addFeedbackBtn]').click();
});

it('Delete Feedback', () => {
  // Press delete buttons from the bottom up
  cy.get('[data-testid="trashBtn"]').spread((first, second) => {
    first.click();
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
});

// Resource: https://www.npmjs.com/package/cypress-file-upload
it('Upload Bad CSV file', () => {
  const yourFixturePath = 'Bad.csv';
  cy.get('[data-testid=importCSV]').attachFile(yourFixturePath).trigger('input');
  // look for new element that says Invalid, waiting up to 1 second.
  cy.contains('*Invalid CSV File');
});

it('Upload empty CSV file', () => {
  const yourFixturePath = 'Empty.csv';
  cy.get('[data-testid=importCSV]').attachFile(yourFixturePath);
});

it('Upload CSV file with only white spaces', () => {
  const yourFixturePath = 'WhiteSpaces.csv';
  cy.get('[data-testid=importCSV]').attachFile(yourFixturePath);
});

it('Upload Good CSV file', () => {
  const yourFixturePath = 'Grades.csv';
  cy.get('[data-testid=importCSV]').attachFile(yourFixturePath);
});

it('Parse Next and Previous Student', () => {
  // upload csv file
  const yourFixturePath = 'Grades.csv';
  cy.get('[data-testid=importCSV]').attachFile(yourFixturePath);
  // click next student button
  cy.get('[data-testid=nextStudentBtn]').click()
  cy.get('[data-testid=nextStudentBtn]').click()
  cy.get('[data-testid=nextStudentBtn]').click()
  // click previous student button
  cy.get('[data-testid=prevStudentBtn]').click()
  cy.get('[data-testid=prevStudentBtn]').click()
});

it('Apply, Update, Delete Feedback', () => {
  // Select a student by name via table
  cy.contains('Mason VanMeurs').click();

  // Apply 2 feedbacks to Mason's submission
  cy.get('[data-testid=applyBtn]').first().check();
  cy.get('[data-testid=applyBtn]').last().check();

  // Check if the feedback string is correct.
  // See https://docs.cypress.io/api/commands/within#Tables
  cy.contains('td', 'Mason VanMeurs').parent('tr').within(() => {
    // check that the score is 77 and feedback string is correct
    cy.get('td').eq(3).contains(77);
    cy.get('td').eq(4).contains('-3: Add comments!; -20: Code does not compile :(');
  });

  // Select another student by name via table
  cy.contains('Young Kwang Choi').click();
  cy.get('[data-testid=applyBtn]').first().check();

  // Remove feedback from a student in list
  cy.contains('Mason VanMeurs').click();
  cy.get('[data-testid=applyBtn]').first().uncheck();

  cy.contains('td', 'Mason VanMeurs').parent('tr').within(() => {
    // check that the score is 80 and feedback string is correct
    cy.get('td').eq(3).contains(80);
    cy.get('td').eq(4).contains('-20: Code does not compile :(');
  });

  // Apply feedback to another student
  cy.contains('Coleman Ulry').click();
  cy.get('[data-testid=applyBtn]').last().check();

  cy.contains('td', 'Coleman Ulry').parent('tr').within(() => {
    // check that the score is 80 and feedback string is correct
    cy.get('td').eq(3).contains(80);
    cy.get('td').eq(4).contains('-20: Code does not compile :(');
  });

  // Change last feedback (add 3 zeros) and check that that others have changed tool
  cy.get('[data-testid=feedbackInput]').last().type('000');

  cy.contains('td', 'Coleman Ulry').parent('tr').within(() => {
    // check that the score is 80 and feedback string is correct
    cy.get('td').eq(3).contains(80);
    cy.get('td').eq(4).contains('-20: Code does not compile :(000');
  });
  cy.contains('td', 'Mason VanMeurs').parent('tr').within(() => {
    // check that the score is 80 and feedback string is correct
    cy.get('td').eq(3).contains(80);
    cy.get('td').eq(4).contains('-20: Code does not compile :(000');
  });

  // Change the last feedback's deduction frmo -20 to -2 and check
  // if the other things are updated.
  cy.get('[data-testid=deductionInput]').last().type('{backspace}');
  cy.contains('td', 'Coleman Ulry').parent('tr').within(() => {
    // check that the score is 80 and feedback string is correct
    cy.get('td').eq(4).contains('-2: Code does not compile :(000');
    cy.get('td').eq(3).contains(98);
  });
  cy.contains('td', 'Mason VanMeurs').parent('tr').within(() => {
    // check that the score is 80 and feedback string is correct
    cy.get('td').eq(4).contains('-2: Code does not compile :(000');
    cy.get('td').eq(3).contains(98);
  });

});

// Check that max scrore is automatically loaded
it('Max Score Auto Fills', () => {
  // Test to see if the name of the application appears on home page
  cy.contains('Max Points: 100');
});
