import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { LocalStorage } from "./helpers/LocalStorage";
import jwt from "jwt-decode";
import { useAppDispatch } from "./helpers/hooks";
import { storeUser } from "./Redux/LoginSlices/LoginSlice";
import { api } from "./APIs/GenericApi";

export default function ProtectedRoutes() {
    const dispatch = useAppDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const token = LocalStorage.get("token");
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        if (token) {
            const decodedToken: { id: string; exp: number; iat: number } = jwt(token);
            const userId = decodedToken.id;

            api.get(`${API_URL}/user/get/${userId}`).then((res) => {
                if (res.status === 200) {
                    dispatch(storeUser(res.data));
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                    window.location.href = "/connexion";
                }
            });
        } else {
            setIsLoggedIn(false);
            window.location.href = "/connexion";
        }
    }, []);

    if (!isLoggedIn) return null;
    return <Outlet />;
}
