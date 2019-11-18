export const GET_ALL_USERS_REQUEST = 'GET_ALL_USERS_REQUEST';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_FAILURE = 'GET_ALL_USERS_FAILURE';

export const ADD_TO_FRIENDS_REQUEST = 'ADD_TO_FRIENDS_REQUEST';
export const ADD_TO_FRIENDS_SUCCESS = 'ADD_TO_FRIENDS_SUCCESS';
export const ADD_TO_FRIENDS_FAILURE = 'ADD_TO_FRIENDS_FAILURE';

export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

export const getUsersRequest = () => ({
    type: GET_ALL_USERS_REQUEST
});

export const getUsersSuccess = (users: any) => ({
    type: GET_ALL_USERS_SUCCESS,
    payload: {users}
});

export const getUsersFailure = (error: string) => ({
    type: GET_ALL_USERS_SUCCESS,
    payload: { error }
});

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



export const deleteUserRequest = () => ({
    type: DELETE_USER_REQUEST
});

export const deleteUserSuccess = () => ({
    type: DELETE_USER_SUCCESS

});

export const deleteUserFailure = (error: string) => ({
    type: DELETE_USER_FAILURE,
    payload: { error }
});

