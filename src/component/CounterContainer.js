import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inc } from './redux';

class CounterContainer extends Component {
    // state = {
    //     count: 2
    // };
    // add = () => {
    //     this.setState(prevState => ({ count: prevState.count + 1 }));
    // };
    render(){
        console.log(this.props.counterValue);
        const { counterValue, addValue } = this.props;
        return (
            <div>
                <h2>Counter: {counterValue} </h2>
                <button onClick={() => addValue()}>Add</button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        counterValue: state.counter.count
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addValue: () => dispatch(inc())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);