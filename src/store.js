import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({});

const initialState = {};

const store = createStore(reducer, initialState, composeWithDevTools());

export default store;
