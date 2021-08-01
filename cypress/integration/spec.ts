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
  cy.get('[data-testid=addFeedbackBtn]').click();
});

it('Delete Feedback', () => {
  // Press delete buttoms from the bottom up
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

  // Press 'Add Feedback' button for new input line
  cy.get('[data-testid=addFeedbackBtn]').click();
});

// Currently don't have an error message in the GUI other than just a console message
// Nothing should be printed to the screen if the file is bad
// Resource: https://www.npmjs.com/package/cypress-file-upload
it('Upload Bad CSV file', () => {
  const yourFixturePath = 'Bad.csv';
  cy.get('[data-testid=importCSV]').attachFile(yourFixturePath);
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