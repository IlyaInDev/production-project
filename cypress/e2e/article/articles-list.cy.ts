describe('Пользовател заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('/articles');
        });
    });
    it('и статьи успешно подгружаются', () => {
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
});