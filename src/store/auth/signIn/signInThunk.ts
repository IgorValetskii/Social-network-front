import * as actions from "../signIn/SignInActions";
import axios from "axios";

export const signIn  = ({userName, password}:any) => async (dispatch: any) => {
    dispatch(actions.signInRequest());
    try {
        const res = await axios.post(`http://localhost:3010/api/login`, {userName,password});

        localStorage.setItem('access-token', res.data.token);

        dispatch(actions.signInSuccess(res.data))


    } catch (e) {
        dispatch(actions.signInFailure(e))
    }
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