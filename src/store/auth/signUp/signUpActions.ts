
// export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
// export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
// export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
//
// export const signInRequest = () => ({
//     type: SIGN_IN_REQUEST
// });
//
// export const signInSuccess = (data:any) => ({
//     type: SIGN_IN_SUCCESS,
//     payload: {data}
// });
//
// export const signInFailure = (error: string) => ({
//     type: SIGN_IN_FAILURE,
//     payload: {error}
// });

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
    payload: {error}
});


// export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
// export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
//
// export const logoutRequest = () => ({
//     type: LOGOUT_REQUEST
// });
//
// export const logoutSuccess = () => ({
//     type: LOGOUT_SUCCESS,
// });
//
// export const logoutFailure = (error: string) => ({
//     type: LOGOUT_FAILURE,
//     payload: {error}
// });
