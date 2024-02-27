import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsError = (state: StateSchema) => state.articleDitailsComments?.error;
export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDitailsComments?.isLoading;