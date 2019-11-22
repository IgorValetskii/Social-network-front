export const GET_USER_FRIENDS_REQUEST = 'GET_USER_FRIENDS_REQUEST';
export const GET_USER_FRIENDS_SUCCESS = 'GET_USER_FRIENDS_SUCCESS';
export const GET_USER_FRIENDS_FAILURE = 'GET_USER_FRIENDS_FAILURE';


export const getUserFriendsRequest = () => ({
    type: GET_USER_FRIENDS_REQUEST
});

export const getUserFriendsSuccess = (data:any) => ({
    type: GET_USER_FRIENDS_SUCCESS,
    payload: {data}
});

export const getUserFriendsFailure = (error: string) => ({
    type: GET_USER_FRIENDS_FAILURE,
    payload: { error }
});