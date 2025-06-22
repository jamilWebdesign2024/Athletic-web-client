import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../RootLayout/RootLayout';
import Home from '../Home/Home';
import Login from '../Pages/SignIn/Login';
import ForgotPassword from '../Pages/SignIn/PasswordForget/ForgotPassword';
import ViewProfile from '../Pages/ViewProfile/ViewProfile';
import EditProfile from '../Pages/EditProfile/EditProfile';
import Register from '../Pages/Register/Register';
import EventDetailsPage from '../Pages/FeaturedEvents/EventDetailsPage';
import EventPage from '../Pages/FeaturedEvents/EventPage';




const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: '/login',
          Component: Login
        },
        {
          path: '/register',
          Component: Register
        },
        {
          path: '/forgot-password',
          Component: ForgotPassword
        },
        {
            path: '/profile',
            Component: ViewProfile
        },
        {
            path: '/profile/edit',
            Component: EditProfile
        },
        {
            path: '/events',
            Component: EventPage
        },

        {
          path: '/events/:id',
          Component: EventDetailsPage
        }
    ]
  },
]);


export default router;

