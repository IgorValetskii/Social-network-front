export const GET_ALL_USERS_REQUEST = 'GET_ALL_USERS_REQUEST';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_FAILURE = 'GET_ALL_USERS_FAILURE';


export const getUsersRequest = () => ({
    type: GET_ALL_USERS_REQUEST
});

export const getUsersSuccess = (data: any) => ({
    type: GET_ALL_USERS_SUCCESS,
    payload: data
});

export const getUsersFailure = (error: string) => ({
    type: GET_ALL_USERS_SUCCESS,
    payload: { error }
});

export const SEND_FRIEND_REQ_REQUEST = 'SEND_FRIEND_REQ_REQUEST';
export const SEND_FRIEND_REQ_SUCCESS = 'SEND_FRIEND_REQ_SUCCESS';
export const SEND_FRIEND_REQ_FAILURE = 'SEND_FRIEND_REQ_FAILURE';

export const sendFriendReqRequest = () => ({
    type: SEND_FRIEND_REQ_REQUEST
});

export const sendFriendReqSuccess = () => ({
    type: SEND_FRIEND_REQ_SUCCESS,
});

export const sendFriendReqFailure = (error: string) => ({
    type: SEND_FRIEND_REQ_FAILURE,
    payload: { error }
});