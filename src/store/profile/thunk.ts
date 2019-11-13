import * as actions from "../profile/actions";
import instance from "../../auth/interceptor"

export const getUserInfo  = () => async (dispatch: any) => {
    dispatch(actions.getUserInfoRequest());
    try {
        const { data } = await instance.get(`users`);
        dispatch(actions.getUserInfoSuccess(data))
    } catch (e) {
        dispatch(actions.getUserInfoFailure(e))
    }
};
