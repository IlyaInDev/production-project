import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                isLoading: false,
                entities: {},
                limit: 5,
                hasMore: true,
                _inited: false,
            },
        });

        await thunk.callThunk(new URLSearchParams());

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticlesList).toBeCalledWith({ page: 1 });
    });

    test('fetchArticlesList has already beeb inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                isLoading: false,
                entities: {},
                limit: 5,
                hasMore: false,
                _inited: true,
            },
        });

        await thunk.callThunk(new URLSearchParams());

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});