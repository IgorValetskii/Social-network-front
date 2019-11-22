import * as actions from './profileActions';
import axios from "axios";
import instance from "../../HelpersAuth/interceptor";

export const getUserInfo  = () => async (dispatch: any) => {
    // dispatch(actions.getUserInfoRequest());
    // try {
    //     // const res = await instance.get(`users`);
    //     // const data1 = res.data;
    //     dispatch(actions.getUserInfoSuccess())
    // } catch (e) {
    //     dispatch(actions.getUserInfoFailure(e))
    // }
};


// export const getAllUsers  = () => async (dispatch: any) => {
//     dispatch(actions.getUsersRequest());
//     try {
//         const { data } = await instance.get(`users/all`);
//         dispatch(actions.getUsersSuccess(data))
//     } catch (e) {
//         dispatch(actions.getUsersFailure(e))
//     }
// };


// export const addToFriends  = (ID:any,ownId:any) => async (dispatch: any) => {
//     dispatch(actions.addToFriendsRequest());
//     try {
//         const body = {
//             incomingFriendReq: ownId
//         };
//
//         const res = await instance.put(`users/all/${ID}`,body);
//
//         const body2 = {
//             outgoingFriendReq: ID
//         };
//
//         const res2 = await instance.put(`users/all/${ownId}`,body2);
//
//         dispatch(actions.addToFriendsSuccess());
//
//         // const { data } = await instance.get(`users/all`);
//         // dispatch(actions.getUsersSuccess(data))
//     } catch (e) {
//         dispatch(actions.addToFriendsFailure(e))
//     }
// };

