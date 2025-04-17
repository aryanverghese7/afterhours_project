import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/Login.jsx";
import Homepage from "./components/Homepage.jsx";
import User from "./components/UserSetup.jsx";
import "./App.css"; 

const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },{
    path: "/homepage",
    Component: Homepage,
  },{
    path: "/user",
    Component: User,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
