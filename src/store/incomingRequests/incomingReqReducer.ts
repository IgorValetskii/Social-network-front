import * as actions from "./incomingReqActions";

const initialState : any = {
    friends : [],
    isLoading: false,
    error: '',
};

const incomingReqReducer = (state = initialState, {type, payload} : any) => {
    switch (type) {
        case actions.GET_FRIEND_REQ_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case actions.GET_FRIEND_REQ_SUCCESS:
            return {
                ...state,
                isLoading: false,
                friends: payload.users
            };
        case actions.GET_FRIEND_REQ_FAILURE:
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
