import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDitailsPageSchema } from '../types';
import { articleDitailsCommentsReducer } from './articleDitailsCommentsSlice';
import { articleDitailsPageRecommendationsReducer } from './articleDitailsPageRecommendationsSlice';

export const articleDitailsPageReducer = combineReducers<ArticleDitailsPageSchema>({
    comments: articleDitailsCommentsReducer,
    recommendations: articleDitailsPageRecommendationsReducer,
});