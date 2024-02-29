import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ArticleDitailsSchema } from '../types/articleDitailsSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';

const initialState: ArticleDitailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

const articleDitailsSlice = createSlice({
    name: 'articleDitails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.error = undefined;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleDitailsActions } = articleDitailsSlice;
export const { reducer: articleDitailsReducer } = articleDitailsSlice;