import {ACTION_CHANGE_NAME, ACTION_CHANGE_SURNAME} from "../../index";
import {ACTION_GET_DEFAULT_INFO, ACTION_SET_EDIT_USER} from "../userConstants/userConstants";

const initialState: never[] = [];


export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ACTION_GET_DEFAULT_INFO:
            return action.payload;
    }
    return state;
};
