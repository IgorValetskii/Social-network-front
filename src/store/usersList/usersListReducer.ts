import * as actions from "./usersListActions";

const initialState : any = {
    users : [],
    isLoading: false,
    error: '',
    addFriendReq: false
    // authorized: true,
    // userId: '',
    // friendRequest: false
};

const usersListReducer = (state = initialState, {type, payload} : any) => {
    switch (type) {
        case actions.GET_ALL_USERS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case actions.GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: payload
            };
        case actions.GET_ALL_USERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload.error
            };
        case actions.ADD_TO_FRIENDS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case actions.ADD_TO_FRIENDS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                addFriendReq: true
                // friendRequest: true
            };
        case actions.ADD_TO_FRIENDS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload.error
            };


        default:
            return state
    }
};

export default usersListReducer;
