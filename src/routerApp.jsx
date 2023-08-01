/* eslint-disable react/function-component-definition */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./homepage";

const HackedPage = () => <div>Hello</div>;

const routes = [
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/apikey",
    element: <HackedPage />
  }
];
const router = createBrowserRouter(routes);
const RouterApp = () => <RouterProvider router={router} />;
export default RouterApp;
