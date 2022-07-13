import { combineReducers } from "redux";
import counterReducer from "./component/redux";
// import postsReducer from "./posts/redux";
// import usersReducer from "./users/redux";

const rootReducer = combineReducers({
    counter: counterReducer,
    // posts: postsReducer,
    // users: usersReducer
})

export default rootReducer;