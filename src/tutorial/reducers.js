import { combineReducers } from "redux";
import actors from "./app/actors/duck/reducers";
import movies from "./app/movies/reducers"

const rootReducer = combineReducers({
    actors: actors,
    movies: movies
})

export default rootReducer;