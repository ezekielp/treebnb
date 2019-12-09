import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
    return createStore(
        RootReducer,
        preloadedState,
        applyMiddleware(logger, thunk)
    )
}

export default configureStore;