import React from "react";
import { useRoutes } from "react-router-dom";
import TradeIndex from "../components/TradeIndex";
import Cart from "../components/Cart";
import Notification from "../components/Notification";
import Admin from "../components/Admin";
import AppIndex from "./AppIndex";
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
