import * as actions from "./actions";

const initialState : any = {
    users : [],
    isLoading: false,
    error: '',
    authorized: true,
    userId: '',
    // friendRequest: false
};

const usersListReducer = (state = initialState, {type, payload} : any) => {
    switch (type) {
        // case actions.GET_ALL_USERS_REQUEST:
        //     return {
        //         ...state,
        //         isLoading: true
        //     };
        // case actions.GET_ALL_USERS_SUCCESS:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         users: payload.users
        //     };
        // case actions.GET_ALL_USERS_FAILURE:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         error: payload.error
        //     };
        case actions.ADD_TO_FRIENDS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case actions.ADD_TO_FRIENDS_SUCCESS:
            return {
                ...state,
                isLoading: false,
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
