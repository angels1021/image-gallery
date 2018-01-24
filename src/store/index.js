/**
 * define store setup and middleware
 * @module store
 * */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import reducers from './reducers';

const middleware = [thunk];

const enhancers = [
  applyMiddleware(...middleware)
];

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
/* eslint-enable */

const configureStore = (initialState = {}) => {
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(...enhancers)
  );

  const persistor = persistStore(store);

  // Make reducers hot reloadable, see http://mxs.is/googmo
  // for redux devtools
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      import('./reducers').then((reducerModule) => {
        store.replaceReducer(reducerModule.default);
      });
    });
  }

  return { store, persistor };
};

export default configureStore;
