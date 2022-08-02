import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

const UsersForm = (props) => {

    const userInput = React.createRef()

    const addUser = (event) => {
        event.preventDefault()
        props.add(userInput.current.value)
        console.log('form')
    }

    return <form onSubmit={addUser}>
            <input ref={userInput} />
            <button type='submit'>Add user</button>
        </form>
}

const mapDispatchToProps = dispatch => ({
    add: user => dispatch(actions.add(user))
})

export default connect(null , mapDispatchToProps)(UsersForm);