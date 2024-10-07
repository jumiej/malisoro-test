import React from "react";
import Home from "./pages/home";
import ContactUs from "./pages/contact-us";
import AboutUs from "./pages/about-us";
import { createBrowserRouter } from "react-router-dom";
import AppConatiner from "./components/appContainer";

export const router = createBrowserRouter([
  {
    element: <AppConatiner />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
]);
