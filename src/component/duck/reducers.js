import types from "./types";

const INITIAL_STATE = {
    users: []
}

const reducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case types.COUNTER_LOAD:
            return {
                ...state, users: [ 'Jan Kowalski', 'Adam Trace']
            }
        default:
            return state
    }
}

export default reducer









// initial stane, reducer