import {createStore, applyMiddleware, compose} from 'redux';

import createHistory from 'history/createBrowserHistory';

import {routerMiddleware} from 'react-router-redux';

import createSagaMiddleware from 'redux-saga';

//import the root reducer
import rootReducer from './reducers';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

export {history};

const configureStore = (defaultState = {}) => {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(
            rootReducer,
            defaultState,
            compose(
                applyMiddleware(sagaMiddleware, middleware),
                window.devToolsExtension ? window.devToolsExtension() : f => f
            )
        ),
        runSaga: sagaMiddleware.run
    }
};

export default configureStore;