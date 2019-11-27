import * as actions from './usersListActions';
import instance from "../../interceptors/AuthInterceptor";

export const getAllUsers  = () => async (dispatch: any) => {
    dispatch(actions.getUsersRequest());
    try {
        const { data } = await instance.get(`users/all`);
        dispatch(actions.getUsersSuccess(data))
    } catch (e) {
        dispatch(actions.getUsersFailure(e))
    }
};


export const sendFriendReq  = (id:any,ownId:any) => async (dispatch: any) => {
    dispatch(actions.sendFriendReqRequest());
    try {

        const body = {id,ownId};
        const res = await instance.put(`users/friendreq`,body);
        console.log(res.status);
        console.log(res.status === 200);
        if(res.status === 200){

            dispatch(actions.sendFriendReqSuccess())

        }
    } catch (e) {
        dispatch(actions.sendFriendReqFailure(e))
    }
};

