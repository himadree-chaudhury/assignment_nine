import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import RootLayout from "../layouts/RootLayout";
import TripDetails from "../pages/TripDetails";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/login";
import Register from "../pages/register";
import AuthLayout from "../layouts/AuthLayout";
import PasswordReset from "../pages/PasswordReset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
      {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
          {
            path: "/auth/login",
            element: <Login></Login>,
          },
          {
            path: "/auth/register",
            element: <Register></Register>,
          },
          {
            path: "/auth/resetPassword",
            element: <PasswordReset></PasswordReset>
          },
        ],
      },
      {
        path: "adventures/:title",
        element: <TripDetails></TripDetails>,
        loader: () => fetch(`tripData.json`),
      },
    ],
  },
]);

export default router;
