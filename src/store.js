import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
  cart: cartReducer,
});

const initialState = {};

const store = createStore(reducer, initialState, composeWithDevTools());

export default store;
