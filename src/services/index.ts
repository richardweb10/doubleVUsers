import axios from 'axios';
import User from './api/users';

const header: any = {
    'Cache-Control': 'no-cache',
    'content-type': 'application/json',
}

const create = (headers: any = header, baseURL: any) => {

    const api = axios.create({
        baseURL,
        headers,
        timeout: 1000000
    });

    const users = User(api);

    return {
        setHeader: (key: string, value: string) => api.defaults.headers.common[key] = value,
        users,
    }
}

export default { create };