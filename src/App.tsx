import React from 'react';
import './App.css';
import UserList from "./components/UsersList";
import {BrowserRouter, Route, Link, Switch, Router, Redirect} from "react-router-dom";
import {createBrowserHistory} from 'history';
import SignIn from "./components/SignIn";
import PrivateRoute from "./routes/privateRoute";
import PublicRoute from "./routes/publicRoute";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import FriendsList from "./components/FriendsList";
const history = createBrowserHistory();




class App extends React.Component {
    render() {


        return (
                    <Switch>
                        <Route exact path='/'> <Redirect to={'/signin'} /> </Route>
                        // @ts-ignore
                        <PublicRoute component={SignIn} path="/signin" exact   />

                        //@ts-ignore
                        <PrivateRoute path="/profile/:id" exact component={Profile}/>
                        //@ts-ignore
                        <PublicRoute path="/registration" exact component={SignUp}/>
                        //@ts-ignore
                        <PrivateRoute path='/:id/users' exact component={UserList}/>
                        //@ts-ignore
                        <PrivateRoute path='/:id/friends' exact component={FriendsList}/>
                    </Switch>
        );
    }
}


export default App;
