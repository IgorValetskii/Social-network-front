import * as actions from "./actions";

const initialState: any = {
    user: {},
    isLoading: false,
    error: '',
    users:[]
};

const profileReducer = (state = initialState, {type, payload}: any) => {
    switch (type) {
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
        case actions.GET_ALL_USERS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case actions.GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: payload.users
            };
        case actions.GET_ALL_USERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload.error
            };

        default:
            return state
    }
};

export default profileReducer;
