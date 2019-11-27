import * as actions from "./friendListActions";

const initialState : any = {
    incomingRequests:'',
    outgoingRequests:'',
    friends : '',
    isLoading: false,
    error: '',
};

const friendsListReducer = (state = initialState, {type, payload} : any) => {
    switch (type) {
        case actions.GET_USER_FRIENDS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case actions.GET_USER_FRIENDS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                incomingRequests: payload.data.friendRequests,
                outgoingRequests: payload.data.outgoingFriendRequests,
                friends: payload.data.friends,
            };
        case actions.GET_USER_FRIENDS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: payload.error
            };

        default:
            return state
    }
};

export default friendsListReducer;