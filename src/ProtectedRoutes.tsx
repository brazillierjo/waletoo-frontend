import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { LocalStorage } from "./helpers/LocalStorage";
import jwt from "jwt-decode";
import { useAppDispatch } from "./helpers/hooks";
import { storeUser } from "./Redux/LoginSlices/LoginSlice";

export default function ProtectedRoutes() {
    const dispatch = useAppDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const token = LocalStorage.get("token");

    useEffect(() => {
        if (token) {
            const decodedToken: { id: string; exp: number; iat: number } = jwt(token);
            const userId = decodedToken.id;

            dispatch(storeUser(userId));
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
            window.location.href = "/connexion";
        }
    }, []);

    if (!isLoggedIn) return null;
    return <Outlet />;
}
