import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

const example = {
    feelings: "",
    // understanding: "",
    // support: "",
    // comments: "",
};

const fromReducer = (state = example, action) => {

    if (action.type === 'SET_FEELING') {
        return {...state,...action.payload};
    } else if (action.type === 'SET_UNDERSTANDING') {
        return {...state,...action.payload};
    } else if (action.type === 'SET_SUPPORT') {
        return {...state,...action.payload};
    } else if (action.type === 'SET_COMMENT') {
        return {...state,...action.payload};
    }
    return state;
};

const store = createStore(
    combineReducers({
        feeling,
        // support,
        // comments,
        // understanding,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 

document.getElementById('root'));
registerServiceWorker();
 