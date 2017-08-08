import { createStore, applyMiddleware, compose } from 'redux';

import createHistory from 'history/createBrowserHistory';

import { routerMiddleware } from 'react-router-redux';

import thunk from 'redux-thunk';

//import the root reducer
import rootReducer from './reducers';

let shareData = JSON.parse(window._sharedData);

const defaultState = {
};

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
    rootReducer,
    defaultState,
    enhancers,
    applyMiddleware(middleware, thunk)
);

export {history};


export default store;