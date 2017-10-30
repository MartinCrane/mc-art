import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { syncHistoryWithStore } from 'react-router-redux'
import './index.css';
import { Router, Route, browserHistory, Redirect } from 'react-router';
import { ConnectedApp } from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(<Provider store={store}>
  <ConnectedApp></ConnectedApp>
</Provider>, document.getElementById('root'));
registerServiceWorker();
