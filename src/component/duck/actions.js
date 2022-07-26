const COUNTER_REFRESH = 'COUNTER_REFRESH';
const COUNTER_LOAD = 'COUNTER_LOAD';
const COUNTER_ADD = 'COUNTER_ADD';
const COUNTER_RESET = 'COUNTER_RESET';
export function load() {
    return {
        type: COUNTER_LOAD
    }
}
export function refresh() {
    return {
        type: COUNTER_REFRESH
    }
}
export function add() {
    return {
        type: COUNTER_ADD
    }
}
export function reset() {
    return {
        type: COUNTER_RESET
    }
}

// const COUNTER_INC = 'COUNTER_INC';
// const COUNTER_DEC = 'COUNTER_DEC';
// const COUNTER_RESET = 'COUNTER_RESET';


// export function inc(){
//     return {
//         type: COUNTER_INC
//     }
// }

// export function dec(){
//     return {
//         type: COUNTER_DEC
//     }
// }

// export function reset(){
//     return {
//         type: COUNTER_RESET
//     }
// }

// const INITIAL_STATE = { count: 0 } //STAN POCZĄTKOWY

// export default function reducer(state = INITIAL_STATE, action){
//     if (action.type === COUNTER_INC){
//         // return Object.assign({}, { counter: state.counter -1});
//         return {...state, count: state.count +1 }
//     }
//     if (action.type === COUNTER_DEC){
//         // return Object.assign({}, { counter: state.counter -1});
//         return {...state, count: state.count -1 }
//     }
//     if (action.type === COUNTER_RESET){
//         // return Object.assign({}, { counter: state.counter -1});
//         return {...state, count: state.count +1 }
//     }
//     else{
//         // return Object.assign({}, { counter: state.counter -1});
//         return { ...state }
//     }   
// }