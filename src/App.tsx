import './styles.css';
import Home from './pages/home';
import ListProducts from './pages/list-products';
import Details from './pages/details';
import SearchResult from './pages/search-result';
import NotFound from './pages/not-found';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import UserProducts from './pages/user-products';
import FormProduct from './pages/form-product';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />  
    },
    {
      path: '/products',
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
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '/my-products',
      element: <UserProducts />
    },
    {
      path: '/form-product',
      element: <FormProduct />
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