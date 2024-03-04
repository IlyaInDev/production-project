import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { URLSearchParams } from 'url';
import { ArticleSortField, ArticleType } from 'entities/Article';
import { SortOrder } from 'shared/types';
import {
    getArticlesPageInited,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkApi) => {
        const { dispatch, getState } = thunkApi;
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            const searchFormUrl = searchParams.get('search');
            const sortFormUrl = searchParams.get('sort') as ArticleSortField;
            const orderFormUrl = searchParams.get('order') as SortOrder;
            const typeFormUrl = searchParams.get('type') as ArticleType;

            if (searchFormUrl) {
                dispatch(articlesPageActions.setSearch(searchFormUrl));
            }

            if (sortFormUrl) {
                dispatch(articlesPageActions.setSort(sortFormUrl));
            }

            if (orderFormUrl) {
                dispatch(articlesPageActions.setOrder(orderFormUrl));
            }

            if (typeFormUrl) {
                dispatch(articlesPageActions.setType(typeFormUrl));
            }

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);