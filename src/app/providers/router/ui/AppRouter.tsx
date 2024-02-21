import {
    Suspense, memo, useCallback,
} from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoutesProps, RouteConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { RequireAuth } from './RequireAuth';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <div className="page-wrapper">
                {route.element}
            </div>
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
                {/* @ts-ignore */}
                {Object.values(RouteConfig).map(renderWithWrapper)}
                {/* {
                    routes.map(({ path, element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={(
                                <div className="page-wrapper">
                                    {element}
                                </div>
                            )}
                        />
                    ))
                } */}
            </Routes>
        </Suspense>
    );
});
