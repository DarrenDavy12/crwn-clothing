import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; 

// logger helps with debugging our redux code.
// go to redux documentation online for more info.

import rootReducer from './root-reducer';

const Middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...Middlewares))

export default store;