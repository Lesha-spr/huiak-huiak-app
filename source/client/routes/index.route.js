const route = {};

if (process.env.NODE_ENV === 'development') {
    route.component = require('./../containers/Home').default;
} else {
    route.getComponent = (nextState, cb) => {
        require.ensure([], (require) => {
            cb(null, require('./../containers/Home').default);
        });
    };
}

export default route;
