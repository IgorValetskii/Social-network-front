import * as actions from "./usersListActions";

const initialState : any = {
    users : [],
    isLoading: false,
    error: '',
    addFriendReq: false
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
        case actions.SEND_FRIEND_REQ_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case actions.SEND_FRIEND_REQ_SUCCESS:
            return {
                ...state,
                isLoading: false,
                addFriendReq: true
            };
        case actions.SEND_FRIEND_REQ_FAILURE:
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
