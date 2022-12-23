export class LocalStorage {
    static set(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static get(key: string) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }

    static remove(key: string) {
        localStorage.removeItem(key);
    }
}
