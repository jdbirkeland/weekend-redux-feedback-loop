import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

const example = {
    feelings: 0,
    understanding: 0,
    support: 0,
    comments: "",
    flagged: false,
    date: ""
};

const formReducer = (state = example, action) => {

    if (action.type === 'SET_FEELINGS') {
        return {...state, feelings: action.payload};
    } else if (action.type === 'SET_UNDERSTANDING') {
        return {...state,understanding: action.payload};
    } else if (action.type === 'SET_SUPPORT') {
        return {...state,support: action.payload};
    } else if (action.type === 'SET_COMMENTS') {
        return {...state,comments: action.payload};
    } else if(action.type === 'CLEAR_FEEDBACK') {
        return example;
    }

    return state;
};

const store = createStore(
    combineReducers({
        formReducer,
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
 