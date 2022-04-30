import { useRoutes } from 'react-router-dom';
import Main from './pages/Home';

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Main />,
      // children: [
      //   { path: "login", element: <Signin /> },
      //   { path: "/", element: <Navigate to="/dashboard" /> },
      //   {
      //     path: "/user",
      //     element: <Navigate to="/dashboard/user?page=1" replace />,
      //   },
      //   {
      //     path: "/report",
      //     element: <Navigate to="/dashboard/report?page=1" replace />,
      //   },
      //   {
      //     path: "/inquiry",
      //     element: <Navigate to="/dashboard/inquiry?page=1" replace />,
      //   },
      // ],
    },
  ]);

  return routes;
};

export default Routes;
