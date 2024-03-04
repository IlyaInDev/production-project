import {
    AnyAction, ReducersMapObject, Reducer, CombinedState, EnhancedStore,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDitailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { UISchema } from 'features/UI';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticleDitailsPageSchema } from 'pages/ArticleDitailsPage';
import { ArticlesPageSchema } from 'pages/ArticlesPage';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    ui: UISchema;

    // Асинхронные редюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDitailes?: ArticleDitailsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
    articleDitailsPage?: ArticleDitailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}