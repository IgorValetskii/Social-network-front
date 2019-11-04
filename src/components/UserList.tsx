import React from 'react';
import {Link} from "react-router-dom";
import {getAsyncUsersList} from "../store/actions/actions";
import {connect} from "react-redux";

interface State {
    user123: any
}

class UserList extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {
        this.props.getUsersList();
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
                        <Link key={person._id} to={`/users/${person._id}`}>

                            <li className="list-group-item list-group-item-action">{person.firstName} {person.lastName} </li>

                        </Link>)}
                </ol>
                <button>Add User</button>
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
        }
    };
};


export default connect(mapStateToProps, mapActionsToProps)(UserList);


// export default UserList;
