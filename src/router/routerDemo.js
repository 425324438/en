import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import home from '../page/homePage'
import welCome from '../page/welcomePage'
import disk from '../page/diskPage'

const routes = (
  <Route path="/" component={home} >
    <IndexRoute component={welCome} />
    <Route path="disk" component={disk} />
  </Route>
)

const routerDemo = () => (
  <Router history={browserHistory} >
    {routes}
  </Router>
)

export default routerDemo
