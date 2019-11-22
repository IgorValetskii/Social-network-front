import * as actions from "./incomingReqActions";

const initialState : any = {
    friends : [],
    isLoading: false,
    error: '',
};

const incomingReqReducer = (state = initialState, {type, payload} : any) => {
    switch (type) {
        case actions.ADD_TO_FRIENDS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case actions.ADD_TO_FRIENDS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                friends: payload.users
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

export default incomingReqReducer;
