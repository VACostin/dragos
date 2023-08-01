/* eslint-disable react/function-component-definition */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./homepage";
import Hackedpage from "./hackedpage";

const routes = [
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/account",
    element: <Hackedpage />
  }
];
const router = createBrowserRouter(routes);
const RouterApp = () => <RouterProvider router={router} />;
export default RouterApp;
