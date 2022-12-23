import axios from "axios";

export class api {
    static get = (url: string) => {
        return axios.get(url);
    };
    static post = (url: string, data: any) => {
        return axios.post(url, data);
    };
    static put = (url: string, data: any) => {
        return axios.put(url, data);
    };
    static delete = (url: string) => {
        return axios.delete(url);
    };
}
