import React from 'react'
import Wall from '../components/Wall'
import Container from '@material-ui/core/Container'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default function App() {
      return (
            <Container>
                  <div className="App">
                        <h1>Application de réseau social interne</h1>
                        <Router>
                              <Route path="/" component={Wall}></Route>
                        </Router>
                  </div>
            </Container>
      )
}
