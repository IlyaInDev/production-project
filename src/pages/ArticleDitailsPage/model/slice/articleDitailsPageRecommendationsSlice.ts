import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { ArticleDitailsRecommendationsSchema } from '../types/ArticleDitailsRecommendationSchema';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationsAdapter = createEntityAdapter({
    selectId: (article: Article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDitailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const articleDitailsPageRecommendationsSlice = createSlice({
    name: 'articleDitailsPageRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleDitailsRecommendationsSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = undefined;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDitailsPageRecommendationsReducer } = articleDitailsPageRecommendationsSlice;