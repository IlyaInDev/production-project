import { Article } from './article';

export interface ArticleDitailsSchema {
    isLoading: boolean;
    error?: string;
    data?: Article;
}