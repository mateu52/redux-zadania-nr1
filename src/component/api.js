// import React, { useState, useEffect } from 'react';

// function ApiLoad(){
//     const [users, setUsers] = useState([]);

    
//     useEffect(()=>{
//         fetch('https://randomuser.me/api/?results=10')
//         .then((response) => response.json())
//         .then((data) => setUsers(data.results));
//     },[]);
//     console.log({users})
//     return(
//         {users}
        // <div>
        //     {users.map((user) => (
        //         <div key={user.login.uuid}>
        //             <h5>{user.name.first}</h5>

        //         </div>
        //     ))}
        // </div>
//     )
// }

// export default ApiLoad;