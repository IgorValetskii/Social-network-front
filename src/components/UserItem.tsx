import React from "react";
import {User} from '../interfaces/user';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

interface Props {
   user:User;
}


class UserItem extends React.Component<any> {
    constructor(props: Props) {
        super(props);
    }



    render(){
        const {id, name, surname, username} = this.props.user;
        return(
            <Link to={`/users/${id}`}><li className="list-group-item list-group-item-action"  >{name} {surname} "{username}"</li></Link>
        );
    }
}

export default UserItem;

