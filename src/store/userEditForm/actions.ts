export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE';

export const getUserInfoRequest = () => ({
    type: GET_USER_INFO_REQUEST
});

export const getUsersSuccess = (users: any) => ({
    type: GET_USER_INFO_SUCCESS,
    payload: {users}
});

export const getUsersFailure = (error: string) => ({
    type: GET_USER_INFO_FAILURE,
    payload: { error }
});

