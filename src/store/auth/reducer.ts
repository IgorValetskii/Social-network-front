 import * as actions from "./actions";

const initialState: any = {
    user: {},
    isLoading: false,
    error: '',
    authorized: false
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
                authorized: true
                // user: [...state.user, payload.data ]
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
                authorized: true
                // user: [...state.user, payload.data ]
            };
        case actions.SIGN_IN_FAILURE:
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
