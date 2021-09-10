import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { Home, GetApi } from './pages'
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Getapi/:start/:limit">
            <GetApi />
          </Route>
        </Switch>
      </Router>

    </>
  )
}

export default App
