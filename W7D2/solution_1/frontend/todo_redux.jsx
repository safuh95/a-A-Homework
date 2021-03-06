import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
function addLoggingToDispatch(store) {
  let patchStore = store.dispatch;
  return function (action) {
    console.log(store.getState());
    console.log(action);
    patchStore(actino);
    console.log(store.getState());
  }
};
function applyMiddlewares(store, ...middlewares) { 
  let dispatch = store.dispatch
  middlewares.forEach(middleware => {
    dispatch = middleware(store)(dispatch);
  });
  return Object.assign({}, store, {dispatch});
};

function addLoggingToDispatch(store) {
  return function (next) {
    return function (action) {
      next(action)
    };
  };
};