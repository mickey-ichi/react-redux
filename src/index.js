import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {ConnectedRouter}  from 'react-router-redux';
import {Route, Switch} from 'react-router';

import configureStore, {history} from './store';

import registerServiceWorker from './registerServiceWorker';

//import components
import App from './containers/App';

let store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact={true} path="/" component={App}/>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
