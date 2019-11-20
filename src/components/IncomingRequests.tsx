import React from 'react';
import {addToFriends} from "../store/usersList/thunk";
import {connect} from "react-redux";

class IncomingRequests extends React.Component {



    render(){
        console.log(this.props);
        return(
            <div>
                <p>Name of user <button>Accept</button> <button>Decline</button> </p>

            </div>
        )
    }

}

const mapStateToProps = (state: any) => (
    {
        usersList: state.profileReducer.users,
        isLoading: state.incomingReqReducer.isLoading,
        friends: state.incomingReqReducer.friends,
        error: state.incomingReqReducer.error
    }
);

const mapActionsToProps = (dispatch: any) => {
    return {

    };
};


export default connect(mapStateToProps, mapActionsToProps)(IncomingRequests);
