import * as actions from './actions';
import axios from "axios";
import instance from "../../HelpersAuth/interceptor";

export const getAllUsers  = () => async (dispatch: any) => {
    // dispatch(actions.getUsersRequest());
    // try {
    //     const { data } = await instance.get(`users/all`);
    //     dispatch(actions.getUsersSuccess(data))
    // } catch (e) {
    //     dispatch(actions.getUsersFailure(e))
    // }
};

export const addToFriends  = (ID:any,ownId:any) => async (dispatch: any) => {
    dispatch(actions.addToFriendsRequest());
    try {
        const body = {
            incomingFriendReq: ownId
        };

        const res = await instance.put(`users/all/${ID}`,body);

        const body2 = {
            outgoingFriendReq: ID
        };

        const res2 = await instance.put(`users/all/${ownId}`,body2);

        dispatch(actions.addToFriendsSuccess());

        // const { data } = await instance.get(`users/all`);
        // dispatch(actions.getUsersSuccess(data))
    } catch (e) {
        dispatch(actions.addToFriendsFailure(e))
    }
};

// export const deleteAsyncUser  = (ID:any) => async (dispatch: any) => {
//     dispatch(actions.deleteUserRequest());
//     try {
//         const res = await axios.delete(`http://localhost:3010/users/all/${ID}`);
//         console.log(res.data);
//         dispatch(actions.deleteUserSuccess());
//         const { data } = await axios.get(`http://localhost:3010/users`);
//         // dispatch(actions.getUsersSuccess(data))
//     } catch (e) {
//         dispatch(actions.deleteUserFailure(e))
//     }
// };
