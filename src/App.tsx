import React from 'react';
import './App.css';
import UserList from "./components/UserList";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
// import createBrowserHistory from "history/createBrowserHistory"
import UserAddForm from "./components/UserAddForm";
import UserEditForm from "./components/UserEditForm";

// const history = createBrowserHistory();


class App extends React.Component {
    render() {
        return (

            <BrowserRouter>
                <div>
                    <h1>Welcome to Superleague!</h1>
                    <ul>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/leagues">Leagues</Link></li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route path="/users/add" exact component={UserAddForm}/>
                        <Route path="/users/:id" exact component={UserEditForm}/>
                        <Route path="/users" exact component={UserList}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;
