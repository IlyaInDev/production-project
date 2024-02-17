import { getUserAuthData } from 'entities/User';
import { Suspense, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { RouteConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

export const AppRouter = memo(() => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => Object.values(RouteConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }
        return true;
    }), [isAuth]);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {
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
                }
            </Routes>
        </Suspense>
    );
});
