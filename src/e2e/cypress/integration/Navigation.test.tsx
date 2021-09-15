describe('Navigation | Raport.com', () => {
  it('Renders component', () => {
    cy.visit('/');
    cy.findAllByText(/raport.com/i).should('exist');
  });
  it('Checks navigation mechanisms', () => {
    cy.visit('/');

    cy.findByText('Newsletter ✉️').should('exist');
    cy.findByText('News').should('exist').click();
    cy.findByText('News📰').should('exist');
    cy.findByText('Newsletter ✉️').should('not.exist');

    cy.findByText('Home').should('exist').click();
    cy.findByText('Your news from Rap World').should('exist');

    cy.findByText('Profile').should('exist').click();
    cy.findByText('Zaloguj się').should('exist');

    // cy.findByText('Contact').should('exist').click();
    // cy.findByText("...").should('exist');
  });
});

export {};
