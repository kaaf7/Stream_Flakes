import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LOGIN_PATH, MAIN_PATH } from '@/constants/constants';
import { MainLayout } from '../custom-components/main-layout';

const routes = (isLoggedIn: boolean) => [
  {
    path: '*',
    element: <></>,
  },
  {
    path: MAIN_PATH,
    element: <MainLayout isLoggedIn={isLoggedIn} />,
    children: [
      {
        path: '',
        element: <></>,
      },
    ],
  },
  {
    path: LOGIN_PATH,
    element: <></>,
  },
];

interface RouterProps {
  isLoggedIn: boolean;
}
export function Router({ isLoggedIn }: RouterProps) {
  const loggedInRoutes = createBrowserRouter(routes(isLoggedIn));

  return <RouterProvider router={loggedInRoutes} />;
}
