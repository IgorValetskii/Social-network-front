import {ACTION_CHANGE_SURNAME,ACTION_CHANGE_NAME} from '../../index'
import {ACTION_GET_DEFAULT_INFO,ACTION_SET_EDIT_USER} from "../userConstants/userConstants";
import UsersData from "../../data/UsersData";
import {UserData} from '../../data/UsersData';

export const getAsyncUserInfo = () =>{
    return (dispatch:any) => {
        setTimeout(() => {
            console.log('THUNK');
            dispatch({
                type: ACTION_GET_DEFAULT_INFO,
                payload: UserData
            })
        }, 2000);
    }
};

const a = console.log('hello');

export const setEditUser = () => {
    return (dispatch:any) => {
        setTimeout(() => {
            console.log('THUNK');
            dispatch({
                type: ACTION_SET_EDIT_USER,
                payload: a
            })
        }, 2000);
    }
};


export const changeName = (newName: any) => {
    // console.log(newName);
    return {
        type: ACTION_CHANGE_NAME,
        payload: newName
    }
};

export const changeSurname = (newName: any) => {
    return {
        type: ACTION_CHANGE_SURNAME,
        payload: newName
    }
};

