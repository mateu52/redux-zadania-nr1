import React, { useEffect } from 'react';
import { connect } from 'react-redux';


const UsersContainer = ({users}) =>{
    useEffect(() => { console.log('componentDidmount')})
    
    return <ul>
        {users.users.map(user => 
            <li>{user}</li>
            )
        }
    </ul>
}
const mapStateToProps = state => ({
    users: state.users
})


export default connect(mapStateToProps, {})(UsersContainer);