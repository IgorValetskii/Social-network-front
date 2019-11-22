import React from 'react';
import IncomingRequests from "./IncomingRequests";
import OutgoingRequests from "./OutgoingRequests";
import Friends from "./Friends";
import {getUserFriends} from "../store/friendsList/friendListThunk";
import {connect} from "react-redux";

class FriendsList extends React.Component <any>{

    componentDidMount(): void {
        const userId = this.props.match.params.id;

    }

    render(){
        const { usersList,outgoingRequests,incomingRequests,friends} = this.props;
        const userId = this.props.match.params.id;
        // const a = usersList.map((person:any)=> person.outgoingFriendRequests.some((el:any) => el === this.props.id ) );

        return (
            <div>
                <p>{incomingRequests} </p>
                <p>{outgoingRequests}</p>
                <p>{friends}</p>
                {/*{usersList.map((person:any)=> person.friendRequests.some((el:any) =>el !== userId) ?*/}
                {/*    <div key={person._id}>*/}

                {/*        <p>{person.firstName} {person.lastName} <button >Accept</button>      <button>Decline</button></p>*/}

                {/*    </div> : null)}*/}

            </div>
        )
    }


}

const mapStateToProps = (state: any) => (
    {
        usersList: state.profileReducer.users,

        incomingRequests: state.friendsListReducer.incomingRequests,
        outgoingRequests: state.friendsListReducer.outgoingRequests,
        friends: state.friendsListReducer.friends,
        isLoading: state.friendsListReducer.isLoading,
        error: state.friendsListReducer.error
    }
);

const mapActionsToProps = (dispatch: any) => {
    return {
        getUserFriends: (userId:any) => {
            dispatch(getUserFriends(userId))
        },
    };
};


export default connect(mapStateToProps, mapActionsToProps)(FriendsList);
