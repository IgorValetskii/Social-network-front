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
const history = createBrowserHistory();




class App extends React.Component {
    render() {


        return (

                <div>
                    <h1>Welcome to Social network!</h1>
                    <Link to="/registration"> <div>Sign up</div> </Link>
                    <hr/>

                    <Switch>
                        <Route exact path='/'> <Redirect to={'/signin'} /> </Route>
                        // @ts-ignore
                        <PublicRoute component={SignIn} path="/signin" exact   />
                        //@ts-ignore
                        <PrivateRoute path="/profile" exact component={Profile}/>
                        //@ts-ignore
                        <PublicRoute path="/registration" exact component={SignUp}/>
                        {/*<Route path="/users/:id" exact component={UserEditForm}/>*/}
                        {/*<Route path="/users" exact component={UserList}/>*/}


                    </Switch>
                </div>
        );
    }
}


export default App;
