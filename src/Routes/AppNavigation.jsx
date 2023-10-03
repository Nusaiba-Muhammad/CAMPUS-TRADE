import React from "react";
import { useRoutes } from "react-router-dom";
import TradeIndex from "../components/TradeIndex";
import Cart from "../components/Cart";
import Notification from "../components/Notification";
import Admin from "../components/Admin";
import AppIndex from "./AppIndex";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Form from "../components/Form";
function AppNavigation() {
  let element = useRoutes([
    {
      path: "/",
      element: <AppIndex />,
      children: [
        { index: true, element: <TradeIndex /> },
        {
          path: "/cart",
          element: <Cart />,
        },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
        {path:'/form', element:<Form/>},
        { path: "/notification", element: <Notification /> },

        {
          path: "/admin",
          element: <Admin />,
        },
      ],
    },
  ]);
  return element;
}
export default AppNavigation;
