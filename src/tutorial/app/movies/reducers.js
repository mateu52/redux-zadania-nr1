import types from "./types"

const INITIAL_STATE = {
    listName: 'Best',
    movies: [
        'Tom Hanks', 'Julia Roberts'
    ]
}

const movies = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.RESET_M:
            return {
                ...state, movies: []
            }
        default:
            return state
    }
}

export default movies;