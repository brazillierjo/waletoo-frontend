import { api } from "./GenericApi";

const API_URL = import.meta.env.VITE_API_URL;

export class Logs {
    static login = (email: string, password: string) => {
        return api.post(`${API_URL}/user/login`, { email, password });
    };
}
