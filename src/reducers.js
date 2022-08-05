import store from './store';
import reducer from './component/duck/';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    users: reducer
})
store.dispatch()

export default rootReducer;