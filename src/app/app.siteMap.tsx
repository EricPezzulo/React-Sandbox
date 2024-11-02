import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import FirstRoute from '../pages/FirstRoute';
import ChildRoute from '../pages/ChildRoute';
import SplitCalculatorRoute from '../pages/SplitCalculatorRoute';
import ErrorRoute from '../pages/ErrorRoute';

// const siteMap = {};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'child',
        element: <ChildRoute />,
        errorElement: <ErrorRoute />
      },
      {
        path: '/firstRoute',
        element: <FirstRoute />,
        errorElement: <ErrorRoute />
      },
      {
        path: '/split-calculator',
        element: <SplitCalculatorRoute />,
        errorElement: <ErrorRoute />

      }
    ],
  },
]);
