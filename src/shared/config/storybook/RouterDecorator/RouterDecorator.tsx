import { StoryFn } from '@storybook/react';
import {
    BrowserRouter,
} from 'react-router-dom';

export const RouterDecorator = (StoryComponent: StoryFn) => (
    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>
);

// export const RouterDecorator = (route: string = '/') => (StoryComponent: StoryFn) => (
//     <MemoryRouter initialEntries={[route]}>
//         <Routes>
//             {Object.values(RouteConfig).map((route) => (
//                 <Route
//                     key={route.path}
//                     path={route.path}
//                     element={<StoryComponent />}
//                 />
//             ))}
//         </Routes>
//     </MemoryRouter>
// );
