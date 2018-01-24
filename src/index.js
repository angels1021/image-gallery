import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import 'foundation-sites/dist/css/foundation.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store} >
    <PersistGate loading="loading..." persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
