import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from "react-redux";
import {log} from "util";

const PrivateRoute = ({component: Component, authorized, userId, ...rest} : any) => {
    return (
        <Route {...rest} render={props => {
            // console.log(authorized);
            // console.log(logout);
            // console.log(authorized !== logout);
       return (
           authorized  && (userId === props.match.params.id)  ?
                <Component {...props} />
                : <Redirect to="/signin"/>
        )}}/>
    )
};

const mapStateToProps = (state: any) => ({
    authorized: state.signInReducer.authorized,
    // logout: state.logOutReducer.logout,
    userId: state.signInReducer.userId
});


export default connect(mapStateToProps, null)(PrivateRoute);