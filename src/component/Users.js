import React, { useState, useEffect } from 'react';

function Users(){
    const [users, setUsers] = useState();

    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=10')
        .then((response) => response.json())
        .then((data) => setUsers(data.results));
    },[]);

    return(
        <p>hello</p>
    )
}

export default Users;