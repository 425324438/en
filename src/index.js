import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'
import RouterDemo from './router/routerDemo'
import Header from './page/header'
import App from './App'

const store = configureStore()

ReactDOM.render(
  <Provider store={store} >
    <Header />
    <RouterDemo />
  </Provider>,
  document.getElementById('root')
);
