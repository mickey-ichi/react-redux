import { put, call, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {DECREMENT, DECREMENT_ASYNC} from '../actions/counter';

export function* decrementAsync() {
        console.log('touch');
        yield call(delay, 1000);
        yield put({type: DECREMENT});
}

export default function* watchDecrement() {
    yield takeEvery(DECREMENT_ASYNC, decrementAsync);
}
