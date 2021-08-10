import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'
import UserAPI from '../fetch/UserAPI'
import Logo from '../logo-groupomania.svg'
import HomeIcon from '@material-ui/icons/Home'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import LockOpenIcon from '@material-ui/icons/LockOpen'

const NavBar = () => {
      const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
      const history = useHistory()

      const handleDisconnect = () => {
            UserAPI.logout()
            setIsAuthenticated(false)
            history.replace('/')
      }
      return (
            <nav
                  style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: '#3F51b5',
                        padding: 20,
                        marginBottom: 20,
                  }}
            >
                  <img
                        src={Logo}
                        alt="Logo Groupomania"
                        style={{
                              width: '12rem',
                        }}
                  />

                  <div
                        style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                        }}
                  >
                        <Link to="/">
                              <HomeIcon
                                    style={{
                                          color: '#FFF',
                                          padding: 8,
                                          fontSize: '1.6rem',
                                    }}
                              />
                        </Link>

                        {isAuthenticated && (
                              <Link to="/form">
                                    <AddCircleIcon
                                          style={{
                                                color: '#FFF',
                                                padding: 8,
                                                fontSize: '1.6rem',
                                          }}
                                    />
                              </Link>
                        )}

                        {!isAuthenticated && (
                              <Link to="/login">
                                    <LockOpenIcon
                                          style={{
                                                color: '#FFF',
                                                padding: 8,
                                                fontSize: '1.6rem',
                                          }}
                                    />
                              </Link>
                        )}
                        {isAuthenticated && (
                              <Link to="/" onClick={handleDisconnect}>
                                    <ExitToAppIcon
                                          style={{
                                                color: '#FFF',
                                                padding: 8,
                                                fontSize: '1.6rem',
                                          }}
                                    />
                              </Link>
                        )}
                  </div>
            </nav>
      )
}

export default NavBar
