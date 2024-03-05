import { createSelector } from '@reduxjs/toolkit';
import { getArticleDitailsData } from 'entities/Article';
import { getUserAuthData } from 'entities/User';

export const getCanEditArticle = createSelector(
    getArticleDitailsData,
    getUserAuthData,
    (article, user) => {
        if (!article || !user) {
            return false;
        }

        return article.user.id === user.id;
    },
);