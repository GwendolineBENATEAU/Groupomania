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
import Wall from './pages/Wall'
import Post from './pages/Post'
import AdminPostsPage from './pages/AdminPostsPage'

import Container from '@material-ui/core/Container'

export default function App() {
      const [isAuthenticated, setIsAuthenticated] = useState(
            UserAPI.isAuthenticated
      )

      return (
            <AuthContext.Provider
                  value={{ isAuthenticated, setIsAuthenticated }}
            >
                  <Container>
                        <div className="App">
                              <Router>
                                    <NavBar />
                                    <Switch>
                                          <Route
                                                path="/"
                                                exact
                                                component={Wall}
                                          ></Route>
                                          <Route
                                                path="/login"
                                                exact
                                                component={Login}
                                          ></Route>
                                          <PrivateRoute
                                                path="/admin"
                                                exact
                                                component={AdminPostsPage}
                                          />
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
            </AuthContext.Provider>
      )
}
