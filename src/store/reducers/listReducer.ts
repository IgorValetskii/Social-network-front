import {ACTION_GET_LIST_USERS, ACTION_DELETE_USER, ACTION_ADD_USER} from "../userConstants/userConstants";

const defaultState : any = {
    users : []
};
// console.log(UsersData);

export const listReducer = (state = defaultState, action:any) => {
    // console.log(state);
    // console.log(action.payload);
    // console.log(action.type);
    switch (action.type) {
        case ACTION_GET_LIST_USERS:
            return {
                ...state,
                users: action.payload
            };
        case ACTION_ADD_USER:
            return {
                ...state,
                // detailed: action.payload
            };
        case ACTION_DELETE_USER:
            return {
                ...state
            };

        default:
            // console.log('state')
            return state
    }
};
