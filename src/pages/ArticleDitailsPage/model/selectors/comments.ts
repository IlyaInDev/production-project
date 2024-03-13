import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => {
    return state.articleDitailsPage?.comments?.isLoading;
};

export const getArticleCommentsError = (state: StateSchema) => {
    return state.articleDitailsPage?.comments?.error;
};
