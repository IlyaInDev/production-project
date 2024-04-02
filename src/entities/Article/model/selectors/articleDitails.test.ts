import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getArticleDitailsData,
    getArticleDitailsIsLoading,
    getArticleDitailsError,
} from './articleDitails';

describe('articleDitails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'title',
        };

        const state: DeepPartial<StateSchema> = {
            articleDitailes: {
                data,
            },
        };
        expect(getArticleDitailsData(state as StateSchema)).toEqual(data);
    });

    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDitailes: {
                isLoading: true,
            },
        };
        expect(getArticleDitailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDitailes: {
                error: 'error',
            },
        };
        expect(getArticleDitailsError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDitailsData(state as StateSchema)).toEqual(undefined);
    });

    test('should work with empty state isLoading', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDitailsIsLoading(state as StateSchema)).toEqual(false);
    });

    test('should work with empty state error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDitailsError(state as StateSchema)).toEqual(undefined);
    });
});
