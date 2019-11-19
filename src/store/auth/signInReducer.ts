import * as actions from "./actions";

const initialState: any = {
    isLoading: false,
    error: '',
    authorized: false,
    userId: ''
};

const signInReducer = (state = initialState, {type, payload}: any) => {
    switch (type) {
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
        case actions.LOGOUT_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case actions.LOGOUT_SUCCESS:
            return {
                ...state,
                // user: {},
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

export default signInReducer;
