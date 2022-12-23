import { api } from "./GenericApi";

export class Logs {
    static login = (username: string, password: string) => {
        return api.post(`${process.env.REACT_APP_API_URL}/api/login`, { username, password });
    };
}
