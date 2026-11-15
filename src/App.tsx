import './styles.css';
import Home from './pages/home';
import ListProducts from './pages/list-products';
import Details from './pages/details';
import SearchResult from './pages/search-result';
import NotFound from './pages/not-found';
import About from './pages/about';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
        
    },
    {
      path: '/list-products',
      element: <ListProducts />
    },
    {
      path: '/details',
      element: <Details />
    },
    {
      path: '/search-result',
      element: <SearchResult />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}