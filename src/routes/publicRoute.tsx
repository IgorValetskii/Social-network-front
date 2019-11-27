import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from "react-redux";

const PublicRoute = ({component: Component, authorized, userId,...rest} : any) => {
    return (
        <Route {...rest} render={props => (
            !authorized ?
                <Component {...props} />
                : <Redirect to={`/profile/${userId}`}/>
        )}/>
    )
};

const mapStateToProps = (state: any) => ({
    authorized: state.signInReducer.authorized,
    userId: state.signInReducer.userId
});


export default connect(mapStateToProps, null)(PublicRoute);
