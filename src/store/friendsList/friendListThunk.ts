import * as actions from './friendListActions'
import instance from "../../HelpersAuth/interceptor";


export const getUserFriends  = (userId:any) => async (dispatch: any) => {
    dispatch(actions.getUserFriendsRequest());
    try {

        const res = await instance.get(`users/${userId}`);
        console.log(res.data);

        dispatch(actions.getUserFriendsSuccess(res.data));

    } catch (e) {
        dispatch(actions.getUserFriendsFailure(e))
    }
};
