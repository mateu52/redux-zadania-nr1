import reducer from './component/duck/';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    users: reducer
})

export default rootReducer;