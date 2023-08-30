import React from 'react'
import ReactDOM from 'react-dom/client'

import {createBrowserRouter,RouterProvider} from "react-router-dom";

import App from './App.jsx'

import HomePage from './pages/HomePage.jsx';
import LogInPage from './pages/LogInPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [                       //App.jsx is the root file and the components inside it change based on route because they are in children
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/login",
        element: <LogInPage />
      },
      {
        path: "/signup",
        element: <SignUpPage />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
