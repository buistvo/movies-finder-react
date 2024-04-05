describe.skip('Counter Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('should render with initial count', () => {
    cy.contains('Count: 0').should('be.visible');
  });

  it('should increment count when the increment button is clicked', () => {
    cy.get('button:contains("+")').click();
    cy.contains('Count: 1').should('be.visible');
  });

  it('should decrement count when the decrement button is clicked', () => {
    cy.get('button:contains("-")').click();
    cy.contains('Count: -1').should('be.visible');
  });
});
