import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './pages/App/App';
import Portal from './pages/Portal/Portal';
import ErrorPage from './pages/ErrorPage/ErrorPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "portal",
    element: <Portal />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
