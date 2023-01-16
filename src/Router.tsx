import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RegisterUserPage } from './pages';

const router = createBrowserRouter([
  {
    path: '',
    element: <>home</>,
  },
  {
    path: '/new',
    element: <RegisterUserPage />,
  },
  {
    path: '/user',
    element: <>user list</>,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
