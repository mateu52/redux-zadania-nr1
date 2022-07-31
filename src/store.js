import { createStore } from 'redux';
import rootReducer from './reducers';
//import { composeWithDevTools } from 'redux-devtools-extension';
//import { configureStore } from '@reduxjs/toolkit';

const store = createStore(rootReducer);

export default store;