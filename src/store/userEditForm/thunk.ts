import * as actions from "../userEditForm/actions";
import axios from "axios";

export const getAsyncUserInfo  = (ID:any) => async (dispatch: any) => {
    dispatch(actions.getUserInfoRequest());
    try {
        const { data } = await axios.get(`http://localhost:3010/users/${ID}`);
        dispatch(actions.getUserInfoSuccess(data))
    } catch (e) {
        dispatch(actions.getUserInfoFailure(e))
    }
};

export const updateAsyncUserInfo  = (ID:any, body:any) => async (dispatch: any) => {
    dispatch(actions.updateUserInfoRequest());
    try {
        const { data } = await axios.put(`http://localhost:3010/users/${ID}`, body);
        console.log(data);
        dispatch(actions.updateUserInfoSuccess(data))
    } catch (e) {
        dispatch(actions.updateUserInfoFailure(e))
    }
};
