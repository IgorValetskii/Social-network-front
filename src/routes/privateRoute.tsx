import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {signIn} from "../store/signIn/thunk";
import {connect} from "react-redux";

const PrivateRoute = ({component: Component, authorized,...rest} : any) => {
    console.log(authorized);
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            authorized ?
                <Component {...props} />
                : <Redirect to="/signin"/>
        )}/>
    )
};

const mapStateToProps = (state: any) => ({
    authorized: state.signInReducer.authorized,
});


export default connect(mapStateToProps, null)(PrivateRoute);