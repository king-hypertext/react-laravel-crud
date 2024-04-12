import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import AppLoader from './layouts/AppLoader';
import AuthLayout from './layouts/AuthLayout';
import GuestLayout from './layouts/GuestLayout';
import Login from './views/Login'
import ForgotPassword from './views/ForgotPassword'
import ResetPassword from './views/ResetPassword'
import NotFound from './views/NotFound'
import AddUser from './views/AddUser'
import { ContextProvider } from './contexts/AuthContext';
import Dashboard from './views/Dashboard';
import 'animate.css/animate.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/app' replace />
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: 'app',
        element: <Dashboard/>
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'user',
        element: <Dashboard />, // Add your component here
        children: [
          {
            path: ':username',
            element: <Dashboard />, // Add your component here
          }
        ]
      }
    ]
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/auth/login',
        element: <Login />,
      },
      {
        path: 'auth/login/forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: 'auth/reset-password',
        element: <ResetPassword />
      },
      {
        path: 'auth/signup',
        element: <AddUser />, // Add your component here
      }
    ]
  },
  {
    path: '/*',
    element: <NotFound />,
  }
]);

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={routes} fallbackElement={<AppLoader />}></RouterProvider>
    </ContextProvider>
  </React.StrictMode>,
)
