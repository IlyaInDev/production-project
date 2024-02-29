import { lazy } from 'react';

export const ArticleDitailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleDitailsPage')), 400);
}));