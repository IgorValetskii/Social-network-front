import * as actions from "./actions";

const initialState: any = {
    user: {},
    isLoading: false,
    error: '',
    userId: '',
    authorized: false,

};

const authReducer = (state = initialState, {type, payload}: any) => {
    switch (type) {
        case actions.ADD_USER_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case actions.ADD_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: payload.data,
                userId: payload.data._id,
                authorized: true
            };
        case actions.ADD_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload.error
            };
        case actions.SIGN_IN_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case actions.SIGN_IN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userId: payload.userId,
                authorized: true,

            };
        case actions.SIGN_IN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload.error
            };
        case actions.GET_USER_INFO_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case actions.GET_USER_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: payload.data,

            };
        case actions.GET_USER_INFO_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload.error
            };
        case actions.LOGOUT_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case actions.LOGOUT_SUCCESS:
            return {
                ...state,
                user: {},
                isLoading: false,
                userId: '',
                authorized: false,
                error: ''
            };
        case actions.LOGOUT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload.error
            };

        default:
            return state
    }
};

export default authReducer;
