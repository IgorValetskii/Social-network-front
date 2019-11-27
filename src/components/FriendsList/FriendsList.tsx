import React from 'react';
import {getUserFriends} from "../../store/friendsList/friendListThunk";
import {connect} from "react-redux";

class FriendsList extends React.Component <any>{

    componentDidMount(): void {
        const ownId = this.props.match.params.id;
        this.props.getUserFriends(ownId)
    }

    render(){
       const {incomingRequests, outgoingRequests, friends} = this.props;

        return (
            <div>
                <p>incomingRequests:</p>
                {incomingRequests}
                <p>outgoingRequests:</p>
                {outgoingRequests}
                <p>friends:</p>
                {friends}
            </div>
        )
    }


}

const mapStateToProps = (state: any) => (
    {

        incomingRequests: state.friendsListReducer.incomingRequests,
        outgoingRequests: state.friendsListReducer.outgoingRequests,
        friends: state.friendsListReducer.friends,
        isLoading: state.friendsListReducer.isLoading,
        error: state.friendsListReducer.error
    }
);

const mapActionsToProps = (dispatch: any) => {
    return {
        getUserFriends: (ownId:any) => {
            dispatch(getUserFriends(ownId))
        },
    };
};


export default connect(mapStateToProps, mapActionsToProps)(FriendsList);
