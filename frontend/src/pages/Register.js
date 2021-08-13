import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'
import UserAPI from '../fetch/UserAPI'
import { Button, TextField, Box, Typography } from '@material-ui/core'

const Login = () => {
      const history = useHistory()
      const { setIsAuthenticated } = useContext(AuthContext)
      const [credentials, setCredentials] = useState({
            username: '',
            email: '',
            password: '',
      })

      const handleSubmit = async (event) => {
            event.preventDefault()
            try {
                  await UserAPI.register(credentials)
                  setIsAuthenticated(true)
                  history.replace('form')
            } catch (error) {
                  console.log(error)
            }
      }

      const handleChange = ({ currentTarget }) => {
            const { name, value } = currentTarget
            setCredentials({
                  ...credentials,
                  [name]: value,
            })
      }

      return (
            <Box
                  sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                  }}
            >
                  <h2 style={{ marginTop: 80 }}>Créer un compte</h2>
                  <form onSubmit={handleSubmit}>
                        <TextField
                              required
                              onChange={handleChange}
                              id="username"
                              name="username"
                              label="Prénom"
                              type="text"
                              placeholder="votre prénom"
                              InputLabelProps={{
                                    shrink: true,
                              }}
                              fullWidth
                              margin="normal"
                              variant="outlined"
                        />
                        <TextField
                              required
                              onChange={handleChange}
                              id="email"
                              name="email"
                              label="Adresse email"
                              type="email"
                              placeholder="prenom.nom@groupomania.com"
                              InputLabelProps={{
                                    shrink: true,
                              }}
                              fullWidth
                              margin="normal"
                              variant="outlined"
                        />
                        <TextField
                              required
                              onChange={handleChange}
                              id="password"
                              name="password"
                              label="Mot de passe"
                              type="password"
                              placeholder="........"
                              InputLabelProps={{
                                    shrink: true,
                              }}
                              fullWidth
                              margin="normal"
                              variant="outlined"
                        />

                        <Button
                              type="submit"
                              color="primary"
                              variant="contained"
                              fullWidth
                              size="large"
                              style={{ marginTop: 30 }}
                        >
                              Inscription
                        </Button>

                        <Typography
                              variant="subtitle2"
                              style={{
                                    marginTop: 10,
                                    color: 'rgba(0, 0, 0, 0.54)',
                              }}
                        >
                              En cliquant sur inscription, vous acceptez les
                              Conditions Générales d'Utilisation internes à
                              l'entreprise Groupomania.
                        </Typography>
                  </form>
            </Box>
      )
}
export default Login
