import React from 'react';
import IncomingRequests from "./IncomingRequests";
import OutgoingRequests from "./OutgoingRequests";
import Friends from "./Friends";

class FriendsList extends React.Component {

    render(){
        return(
            <div>
               <p>Incoming requests</p>
                <IncomingRequests/>
                <p>Outgoing requests</p>
                <OutgoingRequests/>
                <p>Friends</p>
                <Friends/>
            </div>
        )
    }
}

export default FriendsList;