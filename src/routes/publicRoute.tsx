import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from "react-redux";

const PublicRoute = ({component: Component, authorized,...rest} : any) => {
    return (
        <Route {...rest} render={props => (
            !authorized ?
                <Component {...props} />
                : <Redirect to="/profile"/>
        )}/>
    )
};

const mapStateToProps = (state: any) => ({
    authorized: state.authReducer.authorized,
});


export default connect(mapStateToProps, null)(PublicRoute);