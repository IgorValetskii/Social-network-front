import React from 'react';
import {addToFriends} from '../store/incomingRequests/incomingReqThunk'
import {connect} from "react-redux";

class IncomingRequests extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {
        const id = this.props.id;
        this.props.getAllUsers();
    }

    addToFriend =(id:any)=>{

        const ownId = this.props.id;
        this.props.addToFriend(id,ownId);

        // const ownId = this.props.match.params.id;
        // this.props.addToFriend(id,ownId);
        //
        // const {usersList} = this.props;
        // let user = usersList.find((el:any) => el._id === id );
        //
        // this.updateUser = user;
        // this.updateUser.friendRequests.push(ownId);
        // this.forceUpdate();
    };

    render() {
        const { usersList, isLoading} = this.props;
        const a = usersList.map((person:any)=> person.outgoingFriendRequests.some((el:any) => el === this.props.id ) );

        return (
            <div>
                {usersList.map((person:any)=> person.outgoingFriendRequests.some((el:any) =>el === this.props.id) ?
                <div key={person._id}>

                    <p>{person.firstName} {person.lastName} <button onClick={()=>this.addToFriend(person._id)}>Accept</button>      <button>Decline</button></p>


                </div> : null)}


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

        addToFriend: (ID:any, ownId:any) => {
            dispatch(addToFriends(ID,ownId))
        },
    };
};


export default connect(mapStateToProps, mapActionsToProps)(IncomingRequests);
