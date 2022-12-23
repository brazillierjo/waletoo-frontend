import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { LocalStorage } from "./helpers/LocalStorage";

export default function ProtectedRoutes() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const token = LocalStorage.get("token");

    useEffect(() => {
        if (token) {
            // TODO : Check if token is valid
            setIsLoggedIn(true);
        }

        if (!token) {
            setIsLoggedIn(false);
            window.location.href = "/connexion";
        }
    }, []);

    if (!isLoggedIn) return null;
    return <Outlet />;
}
