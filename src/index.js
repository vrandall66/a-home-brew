import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom';
import { loadState, saveState } from './localStorage';
import App from './Containers/App/App';
import rootReducer from './reducers';
import './index.scss';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, loadState(), composeWithDevTools());

store.subscribe(() => {
  saveState({
    beers: store.getState().beers,
    bookmarks: store.getState().bookmarks,
    previousBrews: store.getState().previousBrews,
    searchResults: store.getState().searchResults
  });
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
