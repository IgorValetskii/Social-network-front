import React from 'react';
import {connect} from "react-redux";

class OutgoingRequests extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    render(){
        const { usersList, isLoading} = this.props;
        const a = usersList.map((person:any)=> person.friendRequests.some((el:any) => el === this.props.id ) );

        return (
            <div>
                {usersList.map((person:any)=> person.friendRequests.some((el:any) =>el === this.props.id) ?
                    <div key={person._id}>

                        <p>{person.firstName} {person.lastName} </p>


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

        getAllUsers: (ID: any, ownId: any) => {
            dispatch()
        },
    };
};


export default connect(mapStateToProps, mapActionsToProps)(OutgoingRequests);
