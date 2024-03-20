import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDitailsData = (state: StateSchema) => state.articleDitailes?.data;
export const getArticleDitailsIsLoading = (state: StateSchema) => state.articleDitailes?.isLoading || false;
export const getArticleDitailsError = (state: StateSchema) => state.articleDitailes?.error;