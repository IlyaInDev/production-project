import {
    Suspense, memo, useCallback,
} from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoutesProps, RouteConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { RequireAuth } from './RequireAuth';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>
                {route.element}
            </>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(RouteConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    );
});
