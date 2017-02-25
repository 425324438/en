import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import home from '../page/homePage'
import welCome from '../page/welcomePage'
import disk from '../page/diskPage'

const routerDemo = () => (
  <Router history={browserHistory} >
    <Route path="/" component={home} >
      <IndexRoute component={welCome} />
      <Route path="disk" component={disk} />
    </Route>
  </Router>
)

export default routerDemo
