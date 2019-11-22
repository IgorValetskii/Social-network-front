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

export const ADD_TO_FRIENDS_REQUEST = 'ADD_TO_FRIENDS_REQUEST';
export const ADD_TO_FRIENDS_SUCCESS = 'ADD_TO_FRIENDS_SUCCESS';
export const ADD_TO_FRIENDS_FAILURE = 'ADD_TO_FRIENDS_FAILURE';

export const addToFriendsRequest = () => ({
    type: ADD_TO_FRIENDS_REQUEST
});

export const addToFriendsSuccess = () => ({
    type: ADD_TO_FRIENDS_SUCCESS,
});

export const addToFriendsFailure = (error: string) => ({
    type: ADD_TO_FRIENDS_FAILURE,
    payload: { error }
});