import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './Containers/App/App';
import { loadState, saveState } from './localStorage';
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
