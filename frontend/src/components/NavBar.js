import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'
import UserAPI from '../fetch/UserAPI'
import { Button } from '@material-ui/core'

const NavBar = () => {
      const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
      const history = useHistory()

      const handleDisconnect = () => {
            UserAPI.logout()
            setIsAuthenticated(false)
            history.replace('/')
      }
      return (
            <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <Link style={{ padding: 20 }} to="/">
                        Home
                  </Link>
                  {isAuthenticated && (
                        <Link style={{ padding: 20 }} to="/admin">
                              Admin
                        </Link>
                  )}
                  {!isAuthenticated && (
                        <Link style={{ padding: 20 }} to="/login">
                              Connect
                        </Link>
                  )}
                  {isAuthenticated && (
                        <Button variant="contained" color="grey">
                              <span onClick={handleDisconnect}>Disconnect</span>
                        </Button>
                  )}
            </nav>
      )
}

export default NavBar
