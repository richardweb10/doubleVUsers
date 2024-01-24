import {AxiosInstance} from 'axios';

export default function (api: AxiosInstance){
    return {
        getUsersByName: (params:any) => api.get(`search/users?q=${params.name}&per_page=${params.PER_PAGE}`),
        getUserProfile: (params:any) => api.get(`/users/${params.login}`),
    }
} 