import Countries from './Pages/Countries';
import CountryDetail from './Pages/CountryDetail';
import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element:  Countries(),
  },
  {
    path: '/detail',
    element: CountryDetail(),
  }
])
  

export default router;
