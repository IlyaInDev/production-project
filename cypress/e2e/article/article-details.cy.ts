let currentArticleId = '';

describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`/articles/${article.id}`);
        });
    });

    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    it('и видит содержимое статьи', () => {
        cy.getByTestId('ArticleDitails.Info').should('exist');
    });

    it('и видит рекомендации', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it('и оставляет коментарий', () => {
        cy.getByTestId('ArticleDitails.Info').should('exist');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('Text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });

    it('и ставит оценку', () => {
        cy.getByTestId('ArticleDitails.Info').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });

    it('и ставит оценку (пример со стабом на фикстурах)', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
        cy.getByTestId('ArticleDitails.Info').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});