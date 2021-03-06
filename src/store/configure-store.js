import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger({});

export default function configureStore(rootReducer) {
  let createStoreWithMiddleware;
  if (process.env.NODE_ENV === 'development') {
    const composeEnhancers =
      // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    createStoreWithMiddleware = composeEnhancers(
      applyMiddleware(thunk, logger),
    )(createStore);
  } else {
    createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore);
  }

  return createStoreWithMiddleware(rootReducer);
}
