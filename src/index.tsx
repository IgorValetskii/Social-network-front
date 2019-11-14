import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import usersListReducer from "./store/usersList/reducer";
import {BrowserRouter} from "react-router-dom";
import authReducer from "./store/auth/reducer";
import profileReducer from "./store/profile/reducer"

export const rootReducer = combineReducers({
    usersListReducer : usersListReducer,
    authReducer: authReducer,
    profileReducer: profileReducer
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
