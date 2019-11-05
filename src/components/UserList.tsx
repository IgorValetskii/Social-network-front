import React from 'react';
import {Link} from "react-router-dom";
import {getAsyncUsersList, deleteAsyncUser} from "../store/actions/actions";
import {connect} from "react-redux";


class UserList extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {
        this.props.getUsersList();
    }

    deleteUser =(id:any) => {
        console.log(id);
      this.props.deleteUser(id)
    }

    render() {
        // console.log(this.props);

        const arrUsers = this.props.usersList.users;
        // console.log(arrUsers);
        // const {usersList} = this.props;
        // console.log({usersList});
        return (
            <div>
                <ol>
                    {arrUsers.map((person: any) =>
                        <div key={person._id}>
                            <Link to={`/users/${person._id}`}>
                                <li className="list-group-item list-group-item-action">{person.firstName} {person.lastName} "{person.userName}"</li>
                            </Link>

                            <button onClick={()=>this.deleteUser(person._id)}>Delete User</button>
                        </div>)}
                </ol>
                <Link to={'/users/add'}>
                    <button>Add User</button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => (
    {
        usersList: state.userslist
    }
);

const mapActionsToProps = (dispatch: any) => {
    return {
        getUsersList: () => {
            dispatch(getAsyncUsersList())
        },
        deleteUser: (id:any)=>{
            dispatch(deleteAsyncUser(id))
        }
    };
};


export default connect(mapStateToProps, mapActionsToProps)(UserList);


// export default UserList;
