import * as actions from "./actions";

const initialState: any = {
    user: {},
    isLoading: false,
    error: ''
};

const userAddFormReducer = (state = initialState, {type, payload}: any) => {
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
                user: payload.data
                // user: [...state.user, payload.data ]
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

export default userAddFormReducer;
