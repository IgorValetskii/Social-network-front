import * as actions from "./actions";

const initialState: any = {
    authorized: false,
    isLoading: false,
    error: ''
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

export default signInReducer;
