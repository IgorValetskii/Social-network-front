import {ACTION_SET_EDIT_USER} from "../userConstants/userConstants";

import UsersData from "../../data/UsersData";

const defaultState : any = {
    UsersData
};

// console.log(UsersData);

export const listReducer = (state = defaultState, action:any) => {
    switch (action.type) {
        case ACTION_SET_EDIT_USER:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
    return state
};