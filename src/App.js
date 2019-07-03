import './App.css'

import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { routes } from './routes'
import React from 'react'

function App ({ history }) {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Switch>
          {routes.map(route => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </ConnectedRouter>
    </div>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App
