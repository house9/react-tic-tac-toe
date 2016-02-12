import React from 'react'
import { Route } from 'react-router'

import App from 'containers/App'
import Start from 'components/Start'
import Game from 'containers/Game'

const routes = (
  <Route name='root' path='/' component={App}>
    <Route name='start' path='/start' component={Start} />
    <Route name='game' path='/game/:token' component={Game} />
  </Route>
)

export default routes
