import {INCREMENT, DECREMENT} from '../actions/counter';

const defaultState = {
    count: 0
};

const counter = (state = defaultState, action) => {
    let count = state.count;
    switch (action.type) {
        case INCREMENT:
            count++;
            return Object.assign({}, state, {count: count});
        case DECREMENT:
            count--;
            return Object.assign({}, state, {count: count});
        default:
            return state
    }
};

export default counter;
