import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Components/Home";
import Nextpage from "../Components/Nextpage";


const router= createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/add-caption",
        element: <Nextpage/>,
      },
])


function Routes() {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
  
  export default Routes;
  