import watchDecrement from './counterSaga';
import {all} from 'redux-saga/effects';

export default function * rootSaga () {
    yield all([
        watchDecrement()
    ]);
}