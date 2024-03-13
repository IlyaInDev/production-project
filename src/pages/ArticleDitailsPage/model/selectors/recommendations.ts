import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateSchema) => {
    return state.articleDitailsPage?.recommendations?.isLoading;
};

export const getArticleRecommendationsError = (state: StateSchema) => {
    return state.articleDitailsPage?.recommendations?.error;
};
