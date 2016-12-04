import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.scss';

const App = ({ store, children }) => (
    <MuiThemeProvider>
        <Provider store={store}>
            {children}
        </Provider>
    </MuiThemeProvider>
);

App.propTypes = {
    store: PropTypes.shape().isRequired,
    children: PropTypes.element
};

export default App;
