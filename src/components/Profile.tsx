import React from "react";
import {getUserInfo} from "../store/profile/thunk";
import {connect} from "react-redux";

class Profile extends React.Component<any> {

    componentDidMount(): void {
        this.props.getUserInfo();
    }

    render() {
        const {firstName, lastName} = this.props.user;
        return (
            <div>
                {firstName ?
                    (<div>Profile User {firstName} {lastName}</div>)
                    : <div>Loading... </div>}
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    user: state.profileReducer.user,
    isLoading: state.profileReducer.isLoading,
});

const mapActionsToProps = (dispatch: any) => {
    return {
        getUserInfo: () => {
            dispatch(getUserInfo())
        },

    };
};

export default connect(mapStateToProps, mapActionsToProps)(Profile);
