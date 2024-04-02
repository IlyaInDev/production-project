import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDitailsPageSchema } from '../types';
import { articleDitailsPageRecommendationsReducer } from './articleDitailsPageRecommendationsSlice';
import { articleDitailsCommentsReducer } from './articleDitailsCommentsSlice';

export const articleDitailsPageReducer =
    combineReducers<ArticleDitailsPageSchema>({
        recommendations: articleDitailsPageRecommendationsReducer,
        comments: articleDitailsCommentsReducer,
    });
