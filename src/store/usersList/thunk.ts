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
