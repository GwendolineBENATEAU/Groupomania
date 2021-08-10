import React, { useState } from 'react'
import {
      BrowserRouter as Router,
      Redirect,
      Route,
      Switch,
} from 'react-router-dom'
import AuthContext from './contexts/AuthContext'
import PrivateRoute from './contexts/PrivateRoute'
import UserAPI from './fetch/UserAPI'
import NavBar from './components/NavBar'

import Login from './pages/Login'
import WallPage from './pages/WallPage'
import PostPage from './pages/PostPage'
import PostsForm from './pages/PostsForm'

import Container from '@material-ui/core/Container'

export default function App() {
      const [isAuthenticated, setIsAuthenticated] = useState(
            UserAPI.isAuthenticated
      )

      return (
            <AuthContext.Provider
                  value={{ isAuthenticated, setIsAuthenticated }}
            >
                  <Router>
                        <NavBar />
                        <Container>
                              <Switch>
                                    <Route
                                          path="/"
                                          exact
                                          component={WallPage}
                                    ></Route>
                                    <Route
                                          path="/login"
                                          exact
                                          component={Login}
                                    ></Route>
                                    <PrivateRoute
                                          path="/form"
                                          exact
                                          component={PostsForm}
                                    />
                                    <Route
                                          path="/wall"
                                          exact
                                          component={WallPage}
                                    />
                                    <Route
                                          path="/post/:id"
                                          exact
                                          component={PostPage}
                                    />
                                    <Redirect to="/" />
                              </Switch>
                        </Container>
                  </Router>
            </AuthContext.Provider>
      )
}
