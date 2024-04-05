describe('MovieListPage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('updates query params when searching', () => {
    cy.get('[data-testid=search-input]').type('terminator');
    cy.get('[data-testid=search-button]').click();
    cy.url().should('include', 'query=terminator');
  });

  it('updates query params when selecting genre', () => {
    cy.get('[data-testid=Comedy]').click();
    cy.url().should('include', 'genre=comedy');
  });

  it('updates query params when sorting', () => {
    cy.get('[data-testid=sort-select]').select('RATING');
    cy.url().should('include', 'sortBy=vote_average');
  });

  it('should render details when navigate to /:movieId', () => {
    cy.visit('http://localhost:5173/299536');
    cy.get('[data-testid=movie-details-container]').should('be.visible');
  });
});
