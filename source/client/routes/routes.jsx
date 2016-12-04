import React from 'react';
import Route from 'react-router/lib/Route';
import { default as indexRoute } from './index.route';

const A = () => (
    <h1>123</h1>
);

const routes = () => (
    <Route path="/" {...indexRoute}>
        <Route path="/repos" component={A} />
    </Route>
);

export default routes;
