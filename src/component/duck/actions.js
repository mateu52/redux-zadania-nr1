import types from "./types";

const load = user =>{
    return {
        type: types.COUNTER_LOAD, user
    }
}
const refresh = user => ({
    
        type: types.COUNTER_REFRESH, user
    
})
const add = user => ({

        type: types.COUNTER_ADD, user

})
const reset = user => ({
    
        type: types.COUNTER_RESET, user
    
})
const def = {
    load, add, reset, refresh
}
export default def;  
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