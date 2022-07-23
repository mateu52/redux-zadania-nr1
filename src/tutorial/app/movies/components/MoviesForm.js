import React from 'react'
import { connect } from 'react-redux'
import actions from '../actions';

const MoviesForm = (props) => {

    const movieInput = React.createRef();

    const addMovie = (event) => {
        event.preventDefault()
        props.add('movieInput.current.value')
        console.log('form', movieInput.current.value)
    }

    return(
        <form onSubmit={addMovie}>
            <input ref={movieInput} />
            <button type='submit'></button>
        </form>)
}

const mapDispatchToProps = dispatch => ({
    add: movie => dispatch(actions.add(movie))
})

export default connect(null, mapDispatchToProps)(MoviesForm);