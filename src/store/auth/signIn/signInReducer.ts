import * as actions from "../signIn/SignInActions";

const initialState: any = {
    user:{},
    authorized: false,
    userId: '',
    isLoading: false,
    error: '',
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
                user: payload.data.user,
                userId: payload.data.userId,
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
