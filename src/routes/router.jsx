import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
      {
        path: "login",
        element: <h1>This is login page</h1>,
      },
      {
        path: "register",
        element: <h1>This is register page</h1>,
      },
    ],
  },
]);

export default router;
