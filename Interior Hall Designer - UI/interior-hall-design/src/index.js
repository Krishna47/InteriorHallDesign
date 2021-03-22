import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter, Redirect, Route } from "react-router-dom";
import Login from './components/auth/Login';
import { createAppStore } from './store';
import { Provider } from 'react-redux';

const store = createAppStore();

ReactDOM.render(
  <Provider store={store}>
  <HashRouter>
    <Redirect exact path="/" to="/login" />
    <Route path="/login" component={Login} />
    <Route path="/designer" component={App} />
  </HashRouter>
  </Provider>,
  document.getElementById('root')
);
