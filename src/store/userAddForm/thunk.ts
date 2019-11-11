import * as actions from "../userAddForm/actions";
import axios from "axios";

export const addAsyncUser  = (data:any) => async (dispatch: any) => {
    dispatch(actions.addUserRequest());
    try {
        const res = await axios.post(`http://localhost:3010/users`, data);
        dispatch(actions.addUserSuccess(res.data))
    } catch (e) {
        dispatch(actions.addUserFailure(e))
    }
};
