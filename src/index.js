import { Provider } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'
import RouterDemo from './router/routerDemo'
import Header from './page/header'
import App from './App'

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

const store = configureStore()

ReactDOM.render(
  <Provider store={store} >
    <div>
      <Header />
      <RouterDemo />
    </div>
  </Provider>,
  document.getElementById('root')
);
