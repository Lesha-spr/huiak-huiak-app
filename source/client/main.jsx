import 'react-hot-loader/patch';
import 'babel-polyfill';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import Router from 'react-router/lib/Router';
import { syncHistoryWithStore } from 'react-router-redux';
import browserHistory from 'react-router/lib/browserHistory';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './validation/extend';
import reducer from './reducers';
import routes from './routes/routes';
import App from './App';

const store = createStore(reducer);
const history = syncHistoryWithStore(browserHistory, store);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
    <AppContainer>
        <App store={store}>
            <Router history={history}>
                {routes()}
            </Router>
        </App>
    </AppContainer>,
    document.getElementById('react-root')
);

if (module.hot) {
    module.hot.accept('./routes/routes', () => {
        const newRoutes = require('./routes/routes').default;

        render(
            <AppContainer>
                <App store={store}>
                    <Router history={history}>
                        {newRoutes()}
                    </Router>
                </App>
            </AppContainer>,
            document.getElementById('react-root')
        );
    });
}
