
//import ApiLoad from '../api';
import types from "./types";
import React, { useState, useEffect } from 'react';

//const [ users, setUsers ] = useState(ApiLoad());
//setUsers(ApiLoad());
//console.log({users})
function ApiLoad(){
    const [users, setUsers] = useState([]);

    
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=10')
        .then((response) => response.json())
        .then((data) => setUsers(data.results));
    },[]);
    console.log({users})
}

const INITIAL_STATE = {
    users: [ 'Jan A', 'Jan B' ]
}

const reducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case types.COUNTER_LOAD:
            return {
                ...state, users: [ 'Jan Kowalski', 'Adam Trace']
            }
        case types.COUNTER_RESET:
            return {
                ...state, users: []
            }
        case 'ADD':
            return {
                ...state, users: [...state.users, action.user]
            }
        default:
            return state
    }
}

export default reducer









// initial stane, reducer