import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://localhost:3010/',
    headers: {'Content-Type' : 'application/json'}
    });

instance.interceptors.request.use( (config)=> {
    const token = localStorage.getItem('token');
    console.log(token);
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
        return config
    }
    return config
})