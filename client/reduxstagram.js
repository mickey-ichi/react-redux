import React from 'react';

import {render} from 'react-dom';
//import css
import './styles/style.scss';
import './styles/animation.scss';

//import components
import Main from './components/Main';
import PhotoGird from './components/photo-gird/PhotoGird';
import Single from './components/single/Single';


//import react router
import {Router, Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';


const router =(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" components={Main}>
                <IndexRoute components={PhotoGird}/>
                <Route path="/view/:postId" components={Single}/>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));