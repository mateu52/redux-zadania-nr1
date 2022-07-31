import { createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
//import { configureStore } from '@reduxjs/toolkit';
//import { userActions } from './component/duck';

const store = createStore(rootReducer , composeWithDevTools());


export default store;