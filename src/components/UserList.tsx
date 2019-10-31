import React from 'react';
import UsersData from "../data/UsersData";
import UserItem from "./UserItem";
import {Link} from "react-router-dom";

class UserList extends React.Component<any>{
    constructor(props:any){
        super(props)
    }

    render(){
        console.log(this.props);
        return (

            <div>
                <ul className="list-group">
                    Users
                    {UsersData.map(user => (

                        <UserItem key={user.id}
                                  user={{name: user.name, surname: user.surname, username: user.username, id: user.id}}/>
                    ))}
                </ul>

                <Link to="/users/add">
                    <button >Add User</button>
            </Link>
            </div>
        );
    }
}



export default UserList;

//
// export default UserList

// const UserList = () => {
//     function ShowForm() {
//         alert('1')
//     }
//
//     return (
//         <div>
//             <ul className="list-group">
//                 Users
//                 {UsersData.map(user => (
//                     <UserItem key={user.id}
//                               user={{name: user.name, surname: user.surname, username: user.username, id: user.id}}/>
//                 ))}
//             </ul>
//
//             <button onClick={()=>ShowForm()}>Add User</button>
//         </div>
//     );
// }


// interface Props {
//     value : any
// }
//
// interface State {
//     flags? : boolean
//     tags?: string[]
// }
//
//
// class Users extends React.Component <State, any>{
//     constructor(props:any){
//         super(props);
//     this.state = {
//         flags : false
//     }
// }
//
// handleClick(){
//         this.setState({
//             flags: !this.state.flags
//             }
//         );
// }
//
//
// render() {
//         let list;
//         if (this.state.flags === true){
//           list = <p>list of users</p>
//         }
//         return (
//             <div>
//                 <button onClick={()=> this.handleClick()}>Show users</button>
//                 { console.log(this.state)}
//                <div>{list}</div>
//             </div>
//         );
//     }
// }
