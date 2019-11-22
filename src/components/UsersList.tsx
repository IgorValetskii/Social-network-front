import React from 'react';
import {Link} from "react-router-dom";
import {getAllUsers,addToFriends} from '../store/usersList/usersListThunk';
import {connect} from "react-redux";


class UsersList extends React.Component<any> {
    // private updateUser: any;
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
        const ownId = this.props.match.params.id;
        this.props.addToFriend(id,ownId);

        // const {usersList} = this.props;
        // let user = usersList.find((el:any) => el._id === id );

        // this.updateUser = user;
        // this.updateUser.friendRequests.push(ownId);
        // this.forceUpdate();
    };

    render() {
        const {id} = this.props.match.params;
        //
        const { usersList, isLoading} = this.props;
        // let user = usersList.find((el:any) => el._id === id );
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

                                    <button onClick={()=>this.addToFriend(person._id)} disabled={ person._id === id || person.friendRequests.some((el:any) =>el === id)} >
                                        Add to friends
                                    </button>

                                   {person.friendRequests.some((el:any) =>el === id) ? <div>Запрос в друзья отправлен</div>  : null }

                                </div>)}
                        </ol>
                        {/*<Link to={'/users/add'}>*/}
                        {/*    <button>Add User</button>*/}
                        {/*</Link>*/}
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
        // friendRequest: state.usersListReducer.friendRequest,
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

        // deleteUser: (ID:any) => {
        //     dispatch(deleteAsyncUser(ID))
        // },
    };
};


export default connect(mapStateToProps, mapActionsToProps)(UsersList);


// export default UsersList;
