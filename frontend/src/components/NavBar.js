import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'
import UserAPI from '../fetch/UserAPI'
import Logo from '../logo-groupomania.svg'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'

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
                              width: '10rem',
                              marginRight: 5,
                        }}
                  />

                  <div
                        style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                        }}
                  >
                        <Link to="/" title="home">
                              <IconButton
                                    aria-label="home"
                                    style={{ padding: 10 }}
                              >
                                    <HomeIcon
                                          style={{
                                                color: '#FFF',
                                                fontSize: '1.5rem',
                                          }}
                                    />
                              </IconButton>
                        </Link>

                        {isAuthenticated && (
                              <Link to="/form" title="add post">
                                    <IconButton
                                          aria-label="add post"
                                          style={{ padding: 10 }}
                                    >
                                          <AddCircleIcon
                                                style={{
                                                      color: '#FFF',
                                                      fontSize: '1.5rem',
                                                }}
                                          />
                                    </IconButton>
                              </Link>
                        )}
                        {isAuthenticated && (
                              <a
                                    href="http://localhost:1337/admin/auth/login"
                                    title="moderate"
                              >
                                    <IconButton
                                          aria-label="moderate"
                                          style={{ padding: 10 }}
                                    >
                                          <SupervisorAccountIcon
                                                style={{
                                                      color: '#c2c2c2',
                                                      fontSize: '1.7rem',
                                                }}
                                          />
                                    </IconButton>
                              </a>
                        )}

                        {!isAuthenticated && (
                              <Link to="/login" title="login">
                                    <IconButton
                                          aria-label="login"
                                          style={{ padding: 10 }}
                                    >
                                          <LockOpenIcon
                                                style={{
                                                      color: '#FFF',
                                                      fontSize: '1.5rem',
                                                }}
                                          />
                                    </IconButton>
                              </Link>
                        )}
                        {isAuthenticated && (
                              <Link
                                    to="/"
                                    onClick={handleDisconnect}
                                    title="logout"
                              >
                                    <IconButton
                                          aria-label="logout"
                                          style={{ padding: 10 }}
                                    >
                                          <ExitToAppIcon
                                                style={{
                                                      color: '#FFF',
                                                      fontSize: '1.6rem',
                                                }}
                                          />
                                    </IconButton>
                              </Link>
                        )}
                  </div>
            </nav>
      )
}

export default NavBar
