export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const signInRequest = () => ({
    type: SIGN_IN_REQUEST
});

export const signInSuccess = () => ({
    type: SIGN_IN_SUCCESS
});

export const signInFailure = (error: string) => ({
    type: SIGN_IN_FAILURE,
    payload: { error }
});

export const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE';

export const addUserRequest = () => ({
    type: ADD_USER_REQUEST
});

export const addUserSuccess = (data: any) => ({
    type: ADD_USER_SUCCESS,
    payload: {data}
});

export const addUserFailure = (error: string) => ({
    type: ADD_USER_FAILURE,
    payload: { error }
});




