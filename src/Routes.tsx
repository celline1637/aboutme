import { useRoutes } from 'react-router-dom';
import Main from './pages/Home';

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
