import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {ConnectedRouter}  from 'react-router-redux';
import {Route, Switch} from 'react-router';

import store, {history} from './store';

import registerServiceWorker from './registerServiceWorker';

//import components
import './index.css';
import App from './App';
import Test from './Test';


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact={true} path="/" component={App}/>
                <Route path="/test" component={Test}/>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
