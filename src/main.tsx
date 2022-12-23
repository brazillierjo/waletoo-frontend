import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Connexion from "./pages/Connexion";
import Sidebar from "./components/Commons/Sidebar";
import "./index.css";
import { store } from "./Redux/store";
import { Provider } from "react-redux";

const AppLayout = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <Outlet />
        </div>
    );
};

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
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
