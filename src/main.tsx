import React from 'react';
import ReactDOM from 'react-dom/client'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/home';
import Login from './Pages/Login/login';
import Register from './Pages/Register/register';
import Notfound from './Pages/NotFound/notfound';
import Mainlayout from './Layout/mainlayout';
import Authlayout from './Layout/authlayout';
import About from './Pages/About/about';
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children:[
      {
        index:true,
        element:<Home/>,
      },
      {
        path:"about",
        element:<About/>,
      }

    ]
  },

  {
    path: "/auth",
    element: <Authlayout />,
    children:[
      {
        index:true,
        element:<Login/>,
      },
      {
        path:"register",
        element:<Register/>,
      }

    ]
  },
    {
      path: "*",
      element: <Notfound/>,
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
  <RouterProvider router={router} />
   </React.StrictMode>,
)
