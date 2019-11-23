import * as actions from './usersListActions';
import instance from "../../HelpersAuth/interceptor";

export const getAllUsers  = () => async (dispatch: any) => {
    dispatch(actions.getUsersRequest());
    try {
        const { data } = await instance.get(`users/all`);
        // console.log(data);
        dispatch(actions.getUsersSuccess(data))
    } catch (e) {
        dispatch(actions.getUsersFailure(e))
    }
};


export const addToFriends  = (id:any,ownId:any) => async (dispatch: any) => {
    dispatch(actions.addToFriendsRequest());
    try {

        const body = {id,ownId};
        const res = await instance.put(`users/friendreq`,body);
        console.log(res.status);
        if(res.status === 200){
            dispatch(actions.addToFriendsSuccess())
        }
        // const body = {
        //     incomingFriendReq: ownId
        // };
        //
        // const res = await instance.put(`users/all/${ID}`,body);
        //
        // const body2 = {
        //     outgoingFriendReq: ID
        // };
        //
        // const res2 = await instance.put(`users/all/${ownId}`,body2);
        //
        // dispatch(actions.addToFriendsSuccess());

        // const { data } = await instance.get(`users/all`);
        // dispatch(actions.getUsersSuccess(data))
    } catch (e) {
        dispatch(actions.addToFriendsFailure(e))
    }
};

