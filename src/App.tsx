import React from 'react';
import './App.css';
import UserList from "./components/UsersList";
import {BrowserRouter, Route, Link, Switch, Router, Redirect} from "react-router-dom";
import {createBrowserHistory} from 'history';
import UserEditForm from "./components/UserEditForm";
import UserAddForm from "./components/UserAddForm";
import SignIn from "./components/SignIn";
import PrivateRoute from "./routes/privateRoute";
import PublicRoute from "./routes/publicRoute";
import Profile from "./components/Profile";
const history = createBrowserHistory();




class App extends React.Component {
    render() {


        return (

                <div>
                    <h1>Welcome to Social network!</h1>
                    <Link to="users/add"> <div>Sign up</div> </Link>
                    <hr/>

                    <Switch>
                        <Route exact path='/'> <Redirect to={'/signin'} /> </Route>
                        // @ts-ignore
                        <PublicRoute component={SignIn} path="/signin" exact   />
                        <Route path="/users/add" exact component={UserAddForm}/>
                        {/*<Route path="/users/:id" exact component={UserEditForm}/>*/}
                        {/*<Route path="/users" exact component={UserList}/>*/}
                        //@ts-ignore
                        <PrivateRoute path="/users" exact component={Profile}/>

                    </Switch>
                </div>
        );
    }
}


export default App;
