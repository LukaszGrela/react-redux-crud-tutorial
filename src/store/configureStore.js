import { createStore, applyMiddleware } from 'redux';

import reducers from '../reducers';

import promise from 'redux-promise';
import { logger } from "redux-logger";

const createStoreWithMiddleware = applyMiddleware(
    promise,
    logger
)(createStore);

export const store = createStoreWithMiddleware(reducers);