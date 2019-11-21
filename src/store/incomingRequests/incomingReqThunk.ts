import * as actions from './incomingReqActions';
import instance from "../../HelpersAuth/interceptor";

export const addToFriends  = (ID:any,ownId:any) => async (dispatch: any) => {
    dispatch(actions.addToFriendsRequest());
    try {

        // захожу в Мане и забираю айдишку с массива FrendReq  и вставляю в массив Friends

        //сначала вставлю айдишку в массив Friends
        const body2 = {
            friends: ID
        };

        const res2 = await instance.put(`users/all/${ownId}`,body2);

        //
        const body = {
            incomingFriendReq: ownId
        };

        const res = await instance.put(`users/all/${ID}`,body);

        dispatch(actions.addToFriendsSuccess());

        // const { data } = await instance.get(`users/all`);
        // dispatch(actions.getUsersSuccess(data))
    } catch (e) {
        dispatch(actions.addToFriendsFailure(e))
    }
};