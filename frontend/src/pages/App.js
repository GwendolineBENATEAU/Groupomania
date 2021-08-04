import React from 'react'
import {
      BrowserRouter as Router,
      Redirect,
      Route,
      Switch,
} from 'react-router-dom'

import Log from './Log'
import Wall from './Wall'
import Post from './Post'

import Container from '@material-ui/core/Container'

export default function App() {
      return (
            <Container>
                  <div className="App">
                        <Router>
                              <Switch>
                                    <Route
                                          path="/"
                                          exact
                                          component={Log}
                                    ></Route>
                                    <Route
                                          path="/log"
                                          exact
                                          component={Log}
                                    ></Route>
                                    <Route
                                          path="/wall"
                                          exact
                                          component={Wall}
                                    />
                                    <Route
                                          path="/post/:id"
                                          exact
                                          component={Post}
                                    />
                                    <Redirect to="/" />
                              </Switch>
                        </Router>
                  </div>
            </Container>
      )
}
