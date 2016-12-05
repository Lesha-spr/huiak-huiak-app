import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { match, RouterContext } from 'react-router';
import express from 'express';
import reducer from './../../client/reducers';
import App from './../../client/App';
import routes from './../../client/routes/routes';

const router = express.Router();
const isProd = process.env.NODE_ENV === 'production';

/* GET home page. */
router.get('*', (req, res, next) => {
    match({ routes: routes(), location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            // You can also check renderProps.components or renderProps.routes for
            // your "not found" component or route respectively, and send a 404 as
            // below, if you're using a catch-all route.

            const store = createStore(reducer);

            res.render('index', {
                app: isProd ? renderToString(
                    <App store={store}>
                        <RouterContext {...renderProps} />
                    </App>
                ) : null,
                isProd
            });

        } else {
            res.status(404).send('Not found');
        }
    });
});

module.exports = router;
