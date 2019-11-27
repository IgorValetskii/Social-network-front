import React from 'react';
import {Link} from "react-router-dom";
import {getAllUsers,sendFriendReq} from '../../store/usersList/usersListThunk';
import {connect} from "react-redux";


class UsersList extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {
        this.props.getAllUsers();
    }


    sendFriendReq =(id:any)=>{
        const ownId = this.props.match.params.id;
        this.props.addToFriend(id,ownId);
    };


    render() {
        const {id} = this.props.match.params;
        const { usersList, isLoading} = this.props;

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

                                    <button onClick={()=>this.sendFriendReq(person._id)} disabled={ person._id === id || person.friendRequests.some((el:any) =>el === id)} >
                                        Add to friends
                                    </button>

                                   {person.friendRequests.some((el:any) =>el === id) ? <div>Запрос в друзья отправлен</div>  : null }

                                </div>)}
                        </ol>

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
    }
);

const mapActionsToProps = (dispatch: any) => {
    return {
        getAllUsers: () => {
            dispatch(getAllUsers())
        },

        sendFriendReq: (id:any, ownId:any) => {
            dispatch(sendFriendReq(id,ownId))
        },
    };
};


export default connect(mapStateToProps, mapActionsToProps)(UsersList);


