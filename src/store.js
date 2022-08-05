import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
//import { configureStore } from '@reduxjs/toolkit';
//import { userActions } from './component/duck';
import thunk from 'redux-thunk';

const store = createStore(rootReducer , composeWithDevTools(applyMiddleware(thunk)));


export default store;