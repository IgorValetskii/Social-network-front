import {ACTION_GET_DEFAULT_INFO, ACTION_GET_LIST_USERS} from "../userConstants/userConstants";
import axios from "axios";


export const getAsyncUsersList = () => {
    return (dispatch: any) => {
        return axios.get(`http://localhost:3010/users`)
            .then(res => {
                dispatch({
                    type: ACTION_GET_LIST_USERS,
                    payload: res.data
                })
                // console.log(res.data.forEach(i =>))
                // res.data.forEach((i:any,arr:any) => console.log(i.firstName)  )
            })
    }
};

export const getAsyncUserInfo = () => {
    return (dispatch: any) => {
        return axios.get(`http://localhost:3010/users/5d9daa9fed1b960f48fd8a88`)
            .then(res => {
                dispatch({
                    type: ACTION_GET_DEFAULT_INFO,
                    payload: res.data
                })
            })
    }
};
