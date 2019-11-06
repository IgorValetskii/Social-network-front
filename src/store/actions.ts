import {
    ACTION_ADD_USER, ACTION_DELETE_USER,
    ACTION_GET_DEFAULT_INFO,
    ACTION_GET_LIST_USERS,
    ACTION_UPDATE_USER
} from "../userConstants/userConstants";
import axios from "axios";


export const getAsyncUsersList = () => (dispatch: any) => {
    return axios.get(`http://localhost:3010/users`)
        .then(res => {
            dispatch({
                type: ACTION_GET_LIST_USERS,
                payload: res.data
            })
            // console.log(res.data.forEach(i =>))
            // res.data.forEach((i:any,arr:any) => console.log(i.firstName)  )
        })
};

export const getAsyncUserInfo = (ID:any) => (dispatch: any) => {
    return axios.get(`http://localhost:3010/users/${ID}`)
        .then(res => res.data)
        .then(data => {
            dispatch({
                type: ACTION_GET_DEFAULT_INFO,
                payload: data
            })
        })
};

export const updateAsyncUserInfo = (ID:any,data:any) => (dispatch: any) => {
    return axios.put(`http://localhost:3010/users/${ID}`, data)
        .then(res =>res.data)
        .then(data => {
            dispatch({
                type: ACTION_UPDATE_USER,
                payload: data
            })
        })
};

export const addAsyncUser = (data:any) => (dispatch: any) => {
    return axios.post(`http://localhost:3010/users`, data)
        .then(res => console.log(res.data))
        .then(data => {
            dispatch({
                type: ACTION_ADD_USER,
                payload: data
            })
        })
};

export const deleteAsyncUser = (id:any) => (dispatch: any) => {
    return axios.delete(`http://localhost:3010/users/${id}`)
        .then(res => console.log(res.data))
        .then(data => {
            dispatch({
                type: ACTION_DELETE_USER
            })
        })
};