import {ACTION_GET_LIST_USERS, ACTION_SET_EDIT_USER} from "../userConstants/userConstants";

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
        default:
            // console.log('state')
            return state
    }
};
