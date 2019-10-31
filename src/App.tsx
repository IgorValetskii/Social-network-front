import React from 'react';
import './App.css';
import Users from "./components/UserList";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory"
import UserForm from "./components/UserForm";
import UserEditForm from "./components/UserEditForm";

const history = createBrowserHistory();


class App extends React.Component {
    render() {
        return (

            <BrowserRouter>
                <div>
                    <h1>Welcome to Superleague!</h1>
                    <ul>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/contacts">Leagues</Link></li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route path="/users/add" exact component={UserForm}/>
                        <Route path="/users/:id" exact component={UserEditForm}/>
                        <Route path="/users" exact component={Users}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;
