import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsError = (state: StateSchema) => {
    return state.articleDitailsPage?.recommendations?.error;
};
export const getArticleRecommendationsIsLoading = (state: StateSchema) => {
    return state.articleDitailsPage?.recommendations?.isLoading;
};