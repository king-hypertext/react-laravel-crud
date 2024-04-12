import axios from 'axios'
export const axiosRequest = axios.create({
    baseURL: "http://crud.api/api/"
});
axiosRequest.interceptors.request.use((config) => {
    const token = localStorage.getItem('AUTH_TOKEN');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});
axiosRequest.interceptors.response.use((response) => {
    return response;
},
    (error) => {
        const { response } = error;
        if (response.status === 401) {
            localStorage.removeItem('AUTH_TOKEN');
        }
        throw error;
    })