import { Suspense, memo, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoutesProps } from '@/shared/types/router';
import { RouteConfig } from '../config/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>{route.element}</>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth roles={route.roles}>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>{Object.values(RouteConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    );
});
