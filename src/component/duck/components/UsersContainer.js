import React from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../operations.js';

const UsersContainer = ({users, getAllUsers }) =>{
    
    

    //useEffect(() => { getAllUsers() }, [getAllUsers])
    console.log( {getAllUsers})
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

const mapDispatchToProps = dispatch => ({
    getAllUsers: () => dispatch(getAllUsers())
})

export default connect(
    mapStateToProps, mapDispatchToProps
    )(UsersContainer);