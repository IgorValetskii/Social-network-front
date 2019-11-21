import React from 'react';
import IncomingRequests from "./IncomingRequests";
import OutgoingRequests from "./OutgoingRequests";
import Friends from "./Friends";

class FriendsList extends React.Component <any>{

    render(){
        // console.log(this.props);
        // console.log(this.props.match.params.id);
        // const id = this.props.match.
        return(

            <div>
               <p>Incoming requests </p>
                <IncomingRequests id ={this.props.match.params.id} />
                <p>Outgoing requests</p>
                <OutgoingRequests id ={this.props.match.params.id}/>
                <p>Friends</p>
                <Friends/>
            </div>
        )
    }
}

export default FriendsList;