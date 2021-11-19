import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger'; 

// logger helps with debugging our redux code.
// go to redux documentation online for more info.

import rootReducer from './root-reducer';

const Middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...Middlewares))

export const persistor = persistStore(store);

export default ( store, persistor );

