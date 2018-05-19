import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Test from './components/test'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/new' component={Test} />
      <Route path='/' component={App} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root')
)
registerServiceWorker()
