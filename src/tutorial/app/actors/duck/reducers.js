import types from "./types"

const INITIAL_STATE = {
    listName: 'Best',
    list: [
        'Tom Hanks', 'Julia Roberts'
    ]
}

const actors = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.RESET_A:
            return {
                ...state, list: []
            }
        default:
            return state
    }
}

export default actors;