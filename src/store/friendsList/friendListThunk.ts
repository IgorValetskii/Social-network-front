import * as actions from './friendListActions'
import instance from "../../interceptors/AuthInterceptor";


export const getUserFriends  = (userId:any) => async (dispatch: any) => {
    dispatch(actions.getUserFriendsRequest());
    try {
        const res = await instance.get(`users/${userId}`);

        dispatch(actions.getUserFriendsSuccess(res.data));
    } catch (e) {
        dispatch(actions.getUserFriendsFailure(e))
    }
};
