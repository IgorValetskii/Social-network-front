export const GET_FRIEND_REQ_REQUEST = 'GET_FRIEND_REQ_REQUEST';
export const GET_FRIEND_REQ_SUCCESS = 'GET_FRIEND_REQ_SUCCESS';
export const GET_FRIEND_REQ_FAILURE = 'GET_FRIEND_REQ_FAILURE';


export const getFriendReqRequest = () => ({
    type: GET_FRIEND_REQ_REQUEST
});

export const getFriendReqSuccess = (data: any) => ({
    type: GET_FRIEND_REQ_SUCCESS,
    payload: {data}
});

export const getFriendReqFailure = (error: string) => ({
    type: GET_FRIEND_REQ_FAILURE,
    payload: { error }
});