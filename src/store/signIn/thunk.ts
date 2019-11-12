import * as actions from "../signIn/actions";
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
