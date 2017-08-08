import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import test from './test';

const rootReducer = combineReducers({
    test: test,
    router: routerReducer
});

export default rootReducer;