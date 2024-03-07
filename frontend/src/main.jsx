import React from "react";
import ReactDOM from "react-dom/client";

import {createBrowserRouter, RouterProvider} from "react-router-dom";

// Import Redux provider:
import { Provider } from 'react-redux'
// Import redux store:
import { store } from './store'

//For store persist
import { persistor } from './store/index.js'
import { PersistGate } from 'redux-persist/integration/react'


import App from "./App.jsx";

import HomePage from "./pages/HomePage.jsx";
import LogInPage from "./pages/LogInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import Profile from "./pages/Profile.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            //App.jsx is the root file and the components inside it change based on route because they are in children
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/login",
                element: <LogInPage />,
            },
            {
                path: "/signup",
                element: <SignUpPage />,
            },
            {
                path: "/profile/:userId",
                element: <Profile />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={router} />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
