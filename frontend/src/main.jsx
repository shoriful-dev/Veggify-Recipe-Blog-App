import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import CategoryPage from './pages/category/CategoryPage.jsx';
import Search from './pages/Search.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'categories/:category', element: <CategoryPage /> },
      {path: '/search', element: <Search/>},
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
