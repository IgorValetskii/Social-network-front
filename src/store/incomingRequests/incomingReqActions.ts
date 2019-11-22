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