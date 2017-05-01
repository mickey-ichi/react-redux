import {createStore, compose} from 'redux';

import {syncHistoryWithStore} from 'react-router-redux';

import {browserHistory} from 'react-router';

//import the root reducer
import rootReducer from './reducer';

//create an object for the default data
import posts from './data/posts';
import comments from './data/comments';

const defaultState = {
    posts: posts,
    comments: comments,
};


const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);


export default store;