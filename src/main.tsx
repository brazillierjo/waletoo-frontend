import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Connexion from "./pages/Connexion";
import Sidebar from "./components/Commons/Sidebar";
import "./index.css";

// structure of the App when logged in
const AppLayout = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <Outlet />
        </div>
    );
};

// routes
const router = createBrowserRouter([
    {
        path: "/connexion",
        element: <Connexion />,
    },
    {
        element: <AppLayout />,
        children: [
            {
                element: <ProtectedRoutes />,
                children: [
                    {
                        path: "/",
                        element: <h1>Mon wallet</h1>,
                    },
                    {
                        path: "/mon-compte",
                        element: <h1>Mon compte</h1>,
                    },
                    {
                        path: "/",
                        element: <h1>Mon compte</h1>,
                    },
                ],
            },
        ],
    },
]);

// render the App
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
