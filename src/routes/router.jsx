import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import RootLayout from "../layouts/RootLayout";
import TripDetails from "../pages/TripDetails";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/login";
import Register from "../pages/register";
import AuthLayout from "../layouts/AuthLayout";
import PasswordReset from "../pages/PasswordReset";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";
import UserProfile from "../pages/UserProfile";

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
        path: "/auth",
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
            element: <PasswordReset></PasswordReset>,
          },
          {
            path: "/auth/updateProfile",
            element: (
              <PrivateRoute>
                <UpdateProfile></UpdateProfile>
              </PrivateRoute>
            ),
          },
          {
            path: "/auth/userProfile",
            element: (
              <PrivateRoute>
                <UserProfile></UserProfile>
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: "/:title",
        element: (
          <PrivateRoute>
            <TripDetails></TripDetails>
          </PrivateRoute>
        ),
        // loader: () => fetch(`tripData.json`),
      },
    ],
  },
]);

export default router;
