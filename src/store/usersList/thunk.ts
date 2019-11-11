import * as actions from './actions';
import axios from "axios";

export const getAllUsers  = () => async (dispatch: any) => {
    dispatch(actions.getUsersRequest());
    try {
        const { data } = await axios.get(`http://localhost:3010/users`);
        dispatch(actions.getUsersSuccess(data))
    } catch (e) {
        dispatch(actions.getUsersFailure(e))
    }
};

export const deleteAsyncUser  = (ID:any) => async (dispatch: any) => {
    dispatch(actions.deleteUserRequest());
    try {
        const res = await axios.delete(`http://localhost:3010/users/${ID}`);
        console.log(res.data)
        dispatch(actions.deleteUserSuccess())
        const { data } = await axios.get(`http://localhost:3010/users`);
        dispatch(actions.getUsersSuccess(data))
    } catch (e) {
        dispatch(actions.deleteUserFailure(e))
    }
};
