import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                isLoading: false,
                entities: {},
                limit: 5,
                hasMore: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticlesList).toBeCalledWith({ page: 3 });
    });

    test('fetchArticlesList not called because there is no more data', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                isLoading: false,
                entities: {},
                limit: 5,
                hasMore: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });

    test('fetchArticlesList not called because data is loading', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                isLoading: true,
                entities: {},
                limit: 5,
                hasMore: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});