import * as actions from "./signUpActions";
import axios from "axios";

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



