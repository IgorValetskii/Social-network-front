import React from 'react';
import {Link} from "react-router-dom";
import {getAllUsers, deleteAsyncUser, addToFriends} from '../store/usersList/thunk';
import {connect} from "react-redux";


class UsersList extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {
        this.props.getAllUsers();
    }

    deleteUser =(id:any) => {
      this.props.deleteUser(id);
        console.log(this.props);
        console.log(id);
    };

    addToFriend =(id:any)=>{
        console.log(this.props.match.params.id);
        const ownId = this.props.match.params.id;
        this.props.addToFriend(id,ownId);
    }

    render() {
        const { usersList, isLoading,friendRequest } = this.props;
        return (
            <div>
                { isLoading ? <div>Loading</div> : (
                    <React.Fragment>
                        <ol>
                            {usersList.map((person: any) =>
                                <div key={person._id}>
                                    <Link to={`/users/${person._id}`}>
                                        <li className="list-group-item list-group-item-action">{person.firstName} {person.lastName} "{person.userName}"</li>
                                    </Link>

                                    <button onClick={()=>this.deleteUser(person._id)}>Delete User</button>

                                    <button onClick={()=>this.addToFriend(person._id)}>Add to friends</button>
                                    {person.friendRequests[0] ? <div>Запрос в друзья отправлен</div> : null}


                                </div>)}
                        </ol>
                        <Link to={'/users/add'}>
                            <button>Add User</button>
                        </Link>
                    </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state: any) => (
    {
        usersList: state.usersListReducer.users,
        isLoading: state.usersListReducer.isLoading,
        friendRequest: state.usersListReducer.friendRequest,
        // error: state.usersListReducer.error
    }
);

const mapActionsToProps = (dispatch: any) => {
    return {
        getAllUsers: () => {
            dispatch(getAllUsers())
        },

        addToFriend: (ID:any, ownId:any) => {
            dispatch(addToFriends(ID,ownId))
        },

        deleteUser: (ID:any) => {
            dispatch(deleteAsyncUser(ID))
        },
    };
};


export default connect(mapStateToProps, mapActionsToProps)(UsersList);


// export default UsersList;
