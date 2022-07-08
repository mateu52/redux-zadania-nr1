import React, { useState, useEffect } from 'react';

function Users(){
    const [users, setUsers] = useState();

    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=10')
        .then((response) => response.json())
        .then((data) => setUsers(data.results));
    },[]);

    return(
        <div>
            {users && users.map(user => {
                return <div key={user.login.uuid}>
                    <p>{user.name.first} {user.name.last}</p>
                </div>
            })}
        </div>
    )
}

export default Users;