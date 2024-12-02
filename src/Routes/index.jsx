import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

export default function Routes() {
  const elements = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);
  return elements;
}
