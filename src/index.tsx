import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, combineReducers, Reducer} from "redux";
import {userReducer} from "./store/reducers/userReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {listReducer} from "./store/reducers/listReducer";


export const ACTION_CHANGE_NAME = 'ACTION_CHANGE_NAME';
export const ACTION_CHANGE_SURNAME = 'ACTION_CHANGE_SURNAME';


export const rootReducer = combineReducers({
    user: userReducer,
    userslist : listReducer

    });



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}>
       <App/>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();