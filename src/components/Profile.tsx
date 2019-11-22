import React from "react";
import {getUserInfo} from "../store/profile/profileThunk";
import {logout} from "../store/auth/thunk";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Profile extends React.Component<any> {

    // componentDidMount(): void {
    //     this.props.getUserInfo();
    // }

    logout =()=>{
      this.props.logout();
    };

    render() {
        const {firstName, lastName} = this.props.user;
        return (
            <div>
                {firstName ?
                    (<div>

                        <Link to={`/${this.props.userId}/users`}>
                            <button>All users</button>
                        </Link>

                        <Link to={`/${this.props.userId}/friends`}>
                            <button>Friends</button>
                        </Link>


                        <button onClick={this.logout}>Logout</button>
                        <p>Profile User {firstName} {lastName}</p>
                    </div>)
                    : <div>Loading... </div>}
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    user: state.signInReducer.user,
    userId: state.signInReducer.userId
    // isLoading: state.profileReducer.isLoading,
    // // authorized: state.authReducer.authorized,

});

const mapActionsToProps = (dispatch: any) => {
    return {
        getUserInfo: () => {
            dispatch(getUserInfo())
        },
        logout: () => {
            dispatch(logout())
        }

    };
};

export default connect(mapStateToProps, mapActionsToProps)(Profile);
