import { createBrowserRouter, Outlet } from "react-router-dom";
import Sidebar from "./components/Commons/Sidebar";
import Logs from "./pages/Logs";
import ProtectedRoutes from "./ProtectedRoutes";

const AppLayout = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <Outlet />
        </div>
    );
};

export const router = createBrowserRouter([
    {
        path: "/connexion",
        element: <Logs />,
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
