import { useRoutes } from 'react-router-dom';
import Main from './pages';

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Main />,
    },
  ]);

  return routes;
};

export default Routes;
