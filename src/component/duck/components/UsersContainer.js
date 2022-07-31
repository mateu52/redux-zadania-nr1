import React from 'react';
import { connect } from 'react-redux';


const UsersContainer = ({users}) =>{
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