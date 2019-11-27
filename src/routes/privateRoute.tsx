import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from "react-redux";

const PrivateRoute = ({component: Component, authorized, userId, ...rest} : any) => {
    return (
        <Route {...rest} render={props => {
       return (
           authorized  && (userId === props.match.params.id)  ?
                <Component {...props} />
                : <Redirect to="/signin"/>
        )}}/>
    )
};

const mapStateToProps = (state: any) => ({
    authorized: state.signInReducer.authorized,
    userId: state.signInReducer.userId
});


export default connect(mapStateToProps, null)(PrivateRoute);