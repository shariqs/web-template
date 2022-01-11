/**
 * ROUTES
 * Define your app's various routes here
 */

import React from "react";
import { Redirect } from "react-router-dom";
import Home from "../containers/home";
import About from "../containers/about";

const routes = [
  {
    path: "/",
    exact: true,
    isChild: false,
    private: false,
    component: () => <Redirect to="/home" from="/" />,
  },
  {
    path: "/home",
    exact: true,
    isChild: false,
    private: false,
    component: () => <Home />,
  },
  {
    path: "/about",
    exact: true,
    isChild: false,
    private: false,
    component: () => <About />,
  },
];

export default routes;
