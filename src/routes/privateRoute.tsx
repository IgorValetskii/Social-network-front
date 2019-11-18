import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from "react-redux";
import {log} from "util";

const PrivateRoute = ({component: Component, authorized, userId,...rest} : any) => {
    return (
        <Route {...rest} render={props => {
            // console.log(userId,props.match.params.id);
       return (
            authorized && (userId === props.match.params.id)  ?
                <Component {...props} />
                : <Redirect to="/signin"/>
        )}}/>
    )
};

const mapStateToProps = (state: any) => ({
    authorized: state.authReducer.authorized,
    userId: state.authReducer.userId
});


export default connect(mapStateToProps, null)(PrivateRoute);