import * as actions from "./actions";
import axios from "axios";
import instance from "../../HelpersAuth/interceptor";

export const signIn  = ({userName, password}:any) => async (dispatch: any) => {
    dispatch(actions.signInRequest());
    try {
        const {data} = await axios.post(`http://localhost:3010/api/login`, {
            userName,
            password
        });

        localStorage.setItem('access-token', data.token);

        dispatch(actions.signInSuccess(data.userId))


    } catch (e) {
        dispatch(actions.signInFailure(e))
    }
};

export const signUp  = (data:any) => async (dispatch: any) => {
    dispatch(actions.addUserRequest());
    try {
        const res = await axios.post(`http://localhost:3010/users`, data);

        const {userName,password} = res.data;

        const res2 = await axios.post(`http://localhost:3010/api/login`, {
            userName,
            password
        });

        localStorage.setItem('access-token', res2.data.token);

        dispatch(actions.addUserSuccess(res.data));
    } catch (e) {
        dispatch(actions.addUserFailure(e))
    }
};

export const getUserInfo  = () => async (dispatch: any) => {
    dispatch(actions.getUserInfoRequest());
    dispatch(actions.getUsersRequest());
    try {
        const res = await instance.get(`users`);
        const data1 = res.data;
        dispatch(actions.getUserInfoSuccess(data1))

        const { data } = await instance.get(`users/all`);
        dispatch(actions.getUsersSuccess(data))
    } catch (e) {
        dispatch(actions.getUserInfoFailure(e))
        dispatch(actions.getUsersFailure(e))
    }

    // dispatch(actions.getUsersRequest());
    // try {
    //     const { data } = await instance.get(`users/all`);
    //     dispatch(actions.getUsersSuccess(data))
    // } catch (e) {
    //     dispatch(actions.getUsersFailure(e))
    // }
};

export const logout  = () => async (dispatch: any) => {
    dispatch(actions.logoutRequest());
    try {
        localStorage.removeItem('access-token');
        dispatch(actions.logoutSuccess());
    } catch (e) {
        dispatch(actions.logoutFailure(e))
    }
};


