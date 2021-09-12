import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { reducer } from './reducers/index'

const store = createStore(reducer, applyMiddleware(thunk, logger));
console.log('index.js ln:12 store:', store);
console.log('index.js ln:13 store.getState()', store.getState());

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);


