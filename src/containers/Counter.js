import React from 'react';
import {connect} from 'react-redux';
import Counter from '../components/Counter';
import {decrement, increment, decrementAsync} from '../actions/counter';
import PropTypes from 'prop-types';

class CounterContainer extends React.Component {

    render() {
        return (
            <Counter count={this.props.count}
                     onIncrement={this.props.dispatchIncrement}
                     onDecrement={this.props.dispatchDecrement}
                     onDecrementAsync={this.props.dispatchDecrementAsync}
            />
        );
    }
}

CounterContainer.propTypes = {
    dispatchIncrement: PropTypes.func.isRequired,
    dispatchDecrement: PropTypes.func.isRequired,
    dispatchDecrementAsync: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    return {
        count: state.counter.count,
    }
};

const mapDispatchToProps = dispatch => ({
    dispatchIncrement: () => {
        dispatch(increment());
    },
    dispatchDecrement: () => {
        dispatch(decrement());
    },
    dispatchDecrementAsync: () => {
        dispatch(decrementAsync());
    }
});

const Connector = connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

export default Connector;


