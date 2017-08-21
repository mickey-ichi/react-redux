import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Counter extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.onIncrement}>Increment</button>
                <button onClick={this.props.onDecrement}>Decrement</button>
                <button onClick={this.props.onDecrementAsync}>Decrement Async</button>
                <div>
                    {this.props.count}
                </div>
            </div>
        );
    }
}

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onDecrementAsync: PropTypes.func.isRequired
};

export default Counter;
