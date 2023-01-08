import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/new',
    element: <>register</>,
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
