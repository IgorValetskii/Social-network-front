import * as actions from "./actions";
import axios from "axios";

export const signIn  = ({userName, password}:any) => async (dispatch: any) => {
    dispatch(actions.signInRequest());
    try {
        const {data} = await axios.post(`http://localhost:3010/api/login`, {
            userName,
            password
        });
        localStorage.setItem('access-token', data.token);
        dispatch(actions.signInSuccess())
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
