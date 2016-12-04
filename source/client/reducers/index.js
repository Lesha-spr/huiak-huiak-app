import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import example from './example.reducer';

const reducers = combineReducers({
    example,
    routing: routerReducer
});

export default reducers;
