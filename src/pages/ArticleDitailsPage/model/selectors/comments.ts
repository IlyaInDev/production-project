import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsError = (state: StateSchema) => state.articleDitailsPage?.comments?.error;
export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDitailsPage?.comments?.isLoading;