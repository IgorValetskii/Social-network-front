import * as actions from "../userEditForm/actions";
import axios from "axios";

export const getAsyncUserInfo  = (ID:any) => async (dispatch: any) => {
    dispatch(actions.getUserInfoRequest());
    try {
        const { data } = await axios.get(`http://localhost:3010/users/${ID}`);
        dispatch(actions.getUsersSuccess(data))
    } catch (e) {
        dispatch(actions.getUsersFailure(e))
    }
};