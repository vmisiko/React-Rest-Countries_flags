import Countries from './Pages/Countries';
import CountryDetail from './Pages/CountryDetail';
import ErrorPage from './Pages/ErrorPage';

import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element:  <Countries />,
    errorElement: <ErrorPage />
  },
  {
    path: '/detail/:code',
    element: <CountryDetail />,
    errorElement: <ErrorPage />
  },
  {
    path: '/error/:code/:message',
    element: <ErrorPage />,
    errorElement: <ErrorPage />
  },
])
  

export default router;
