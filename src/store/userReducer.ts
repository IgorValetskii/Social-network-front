import {ACTION_GET_DEFAULT_INFO, ACTION_UPDATE_USER} from "../userConstants/userConstants";

const initialState: any = {
    detailed: ''
};


export const userReducer = (state = initialState, action: any) => {
    // console.log(state);
    // console.log(action.payload);
    // console.log(action.type);
    switch (action.type) {
        case ACTION_GET_DEFAULT_INFO:
            return {
                ...state,
                detailed: action.payload

            };
        case ACTION_UPDATE_USER:
            return {
                ...state,
                detailed: action.payload
            };


        default:
            // console.log('state')
            return state
    }
};