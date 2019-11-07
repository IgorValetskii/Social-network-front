export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE';
export const UPDATE_USER_INFO_REQUEST = 'UPDATE_USER_INFO_REQUEST';
export const UPDATE_USER_INFO_SUCCESS = 'UPDATE_USER_INFO_SUCCESS';
export const UPDATE_USER_INFO_FAILURE = 'UPDATE_USER_INFO_FAILURE';

export const getUserInfoRequest = () => ({
    type: GET_USER_INFO_REQUEST
});

export const getUserInfoSuccess = (data: any) => ({
    type: GET_USER_INFO_SUCCESS,
    payload: {data}
});

export const getUserInfoFailure = (error: string) => ({
    type: GET_USER_INFO_FAILURE,
    payload: { error }
});

export const updateUserInfoRequest = () => ({
    type: UPDATE_USER_INFO_REQUEST
});

export const updateUserInfoSuccess = (data:any) => ({
    type: UPDATE_USER_INFO_SUCCESS,
    payload: {data}
});

export const updateUserInfoFailure = (error: string) => ({
    type: UPDATE_USER_INFO_FAILURE,
    payload: { error }
});



