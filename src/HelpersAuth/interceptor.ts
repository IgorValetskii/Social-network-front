import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3010/',
    headers: {'Content-Type' : 'application/json'}
    });

instance.interceptors.request.use( (config)=> {
    const token = localStorage.getItem('access-token');
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
        return config
    }
    return config
}, error => {
    return Promise.reject(error);
});

export default instance;