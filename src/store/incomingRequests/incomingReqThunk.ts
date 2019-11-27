import * as actions from './incomingReqActions';
import instance from "../../interceptors/AuthInterceptor";

export const addToFriends  = (ID:any,ownId:any) => async (dispatch: any) => {
    dispatch(actions.addToFriendsRequest());
    try {

        // захожу в получателя запроса на добавления в друзья и забираю айдишку с массива FrendReq  и вставляю в массив Friends

        const body2 = {
            userId: ID
         };

        const res2 = await instance.put(`users/incomingfriendschange/${ownId}`,body2);
        // в res2.data лежит обновленный юзер

        // захожу в отправителя запроса на добваления в друзья
        const body = {
            userId: ownId
        };

        const res = await instance.put(`users/outgoingfriendschange/${ID}`,body);
        // в res.data лежит обновленный юзер

        dispatch(actions.addToFriendsSuccess());

        // const { data } = await instance.get(`users/all`);
        // dispatch(actions.getUsersSuccess(data))
    } catch (e) {
        dispatch(actions.addToFriendsFailure(e))
    }
};
