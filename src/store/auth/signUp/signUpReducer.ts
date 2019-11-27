import * as actions from "./signUpActions";

const initialState: any = {
    user:{},
    isLoading: false,
    error: '',
    authorized1: false,
    userId: ''
};

const signUpReducer = (state = initialState, {type, payload}: any) => {
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
                authorized1: true
            };
        case actions.ADD_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload.error
            };

        default:
            return state
    }
};

export default signUpReducer;
