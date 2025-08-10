import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../RootLayout/RootLayout';
import Home from '../Home/Home';
import Login from '../Pages/SignIn/Login';
import ForgotPassword from '../Pages/SignIn/PasswordForget/ForgotPassword';
import ViewProfile from '../Pages/ViewProfile/ViewProfile';
import EditProfile from '../Pages/EditProfile/EditProfile';
import Register from '../Pages/Register/Register';
import EventPage from '../Pages/FeaturedEvents/EventPage';
import PrivateRoute from '../routes/PrivateRoute';
import CreateEvent from '../Pages/CreateEvent/CreateEvent';
import EventDetails from '../Pages/EventDetails/EventDetails';
import MyBookings from '../Pages/MyBookings/MyBookings';
import ManageEvents from '../Pages/ManageEvents/ManageEvents';
import UpdatedEventPage from '../Pages/ManageEvents/UpdatedEventPage/UpdatedEventPage';
import ErrorPage from '../Pages/Errorpage/ErrorPage';
import About from '../Pages/About/About';




const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: '/about',
        Component: About
      },
      {
        path: '/events',
        Component: EventPage
      },
      {
        path: '/create-event',
        element: <PrivateRoute>
          <CreateEvent></CreateEvent>
        </PrivateRoute>
      },
      {
        path: '/events/:id',
        element: <PrivateRoute>
          <EventDetails></EventDetails>
        </PrivateRoute>,
        loader: async ({ params }) => {
          const res = await fetch(`https://athletic-club-server.vercel.app/sports/${params.id}`);
          if (!res.ok) {
            throw new Response("Not Found", { status: 404 });
          }
          return res.json();
        }
      },
      {
        path: '/myBookings',
        element: <PrivateRoute>
          <MyBookings></MyBookings>
        </PrivateRoute>
      },
      {
        path: '/manageEvents',
        element: <PrivateRoute>
          <ManageEvents></ManageEvents>
        </PrivateRoute>
      },
      {
        path: '/updateEvent/:id',
        loader: async ({ params }) => {
          const res = await fetch(`https://athletic-club-server.vercel.app/sports/${params.id}`);
          if (!res.ok) {
            throw new Response("Not Found", { status: 404 });
          }
          return res.json();
        },
        Component: UpdatedEventPage
      }
    ]
  },
]);


export default router;

