import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import FirstRoute from '../pages/FirstRoute';
import ChildRoute from '../pages/ChildRoute';

// const siteMap = {};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'child',
        element: <ChildRoute />,
      },
      {
        path: '/firstRoute',
        element: <FirstRoute />,
      },
    ],
  },
]);
