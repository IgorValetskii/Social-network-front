import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from "react-redux";

const PrivateRoute = ({component: Component, authorized,...rest} : any) => {
    return (
        <Route {...rest} render={props => (
            authorized ?
                <Component {...props} />
                : <Redirect to="/signin"/>
        )}/>
    )
};

const mapStateToProps = (state: any) => ({
    authorized: state.authReducer.authorized,
});


export default connect(mapStateToProps, null)(PrivateRoute);