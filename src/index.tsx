import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import usersListReducer from "./store/usersList/usersListReducer";
import {BrowserRouter} from "react-router-dom";
import signInReducer from "./store/auth/signIn/signInReducer";
import signUpReducer from "./store/auth/signUp/signUpReducer";
import incomingReqReducer from "./store/incomingRequests/incomingReqReducer";
import friendsListReducer from "./store/friendsList/friendsListReducer";

export const rootReducer = combineReducers({
    usersListReducer : usersListReducer,
    signInReducer : signInReducer,
    registrationReducer : signUpReducer,
    incomingReqReducer: incomingReqReducer,
    friendsListReducer: friendsListReducer
});



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
       <App/>
       </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
