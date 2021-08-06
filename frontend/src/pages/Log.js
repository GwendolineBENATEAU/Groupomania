import React, { useState } from 'react'
import { /* useParams, */ Link } from 'react-router-dom'
import UserAPI from '../fetch/UserAPI'
import { Button, TextField, Box, Typography } from '@material-ui/core'

const Log = () => {
      const [credentials, setCredentials] = useState({
            identifier: '',
            password: '',
      })

      const handleChange = ({ currentTarget }) => {
            //const name = currentTarget.name
            //const value = currentTarget.value
            const { name, value } = currentTarget
            setCredentials({
                  //prend l'ancienne valeur du champ et rajoute à la suite les autres valeurs
                  ...credentials,
                  [name]: value,
            })
      }

      const handleSubmit = async (event) => {
            event.preventDefault()

            try {
                  await UserAPI.login(credentials)
            } catch (error) {
                  console.log(error)
            }
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
                  <h2>S'identifier</h2>

                  <form onSubmit={handleSubmit}>
                        <TextField
                              onChange={handleChange}
                              id="identifier"
                              name="identifier"
                              label="Adresse email"
                              type="email"
                              placeholder="prenom.nom@groupomania.com"
                              InputLabelProps={{
                                    shrink: true,
                              }}
                              fullWidth
                              margin="normal"
                              variant="outlined"
                              /* error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                        onBlur={handleBlur}
                        value={values.email} */
                        />
                        <TextField
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
                              /* error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                        onBlur={handleBlur}
                        value={values.password} */
                        />

                        <Button
                              type="submit"
                              color="primary"
                              variant="contained"
                              fullWidth
                              size="large"
                              style={{ marginTop: 30 }}
                              /* disabled={isSubmitting} */
                        >
                              Connexion
                        </Button>

                        <Typography
                              variant="subtitle2"
                              style={{ marginTop: 10 }}
                        >
                              Vous n'avez pas encore de compte ?
                              <Link to="/register"> S'enregistrer</Link>
                        </Typography>
                  </form>
            </Box>
      )
}
export default Log

/* 
import RegisterForm from '../components/RegisterForm'
import LoginForm from '../components/LoginForm'
export default function Log() {
      return (
            <div className="Log">
                  <h2>S'enregistrer</h2>
                  <RegisterForm />
                  <h2>Se connecter</h2>
                  <LoginForm />
            </div>
      )
}
 */
