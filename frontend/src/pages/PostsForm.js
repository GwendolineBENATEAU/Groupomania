import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import MessageAPI from '../fetch/MessageAPI'
import UploadFile from '../components/UploadFile'
import { Button, TextField } from '@material-ui/core'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'

const PostsForm = () => {
      const history = useHistory()
      const [credentials, setCredentials] = useState({
            title: '',
            content: '',
            image: '',
      })

      const handleSubmit = async (event) => {
            event.preventDefault()
            try {
                  await MessageAPI.create(credentials)
                  history.replace('/')
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
            <div
                  style={{
                        marginTop: 50,
                  }}
            >
                  <h2>Créer une publication</h2>

                  <form
                        onSubmit={handleSubmit}
                        style={{
                              display: 'flex',
                              flexDirection: 'column',
                        }}
                  >
                        <TextField
                              onChange={handleChange}
                              id="title"
                              name="title"
                              label="Titre"
                              type="text"
                              placeholder="Donnez un titre …"
                              fullWidth
                              multiline
                              margin="normal"
                              InputLabelProps={{
                                    shrink: true,
                              }}
                              variant="outlined"
                        />
                        <TextField
                              onChange={handleChange}
                              id="content"
                              name="content"
                              label="Contenu"
                              type="text"
                              placeholder="... et rédigez votre message"
                              fullWidth
                              multiline
                              margin="normal"
                              InputLabelProps={{
                                    shrink: true,
                              }}
                              variant="outlined"
                        />
                        <UploadFile />

                        <Button
                              type="submit"
                              color="primary"
                              variant="contained"
                              style={{ marginTop: 30, width: 130 }}
                        >
                              <SendOutlinedIcon
                                    style={{
                                          paddingRight: 10,
                                    }}
                              />
                              <span>Envoyer</span>
                        </Button>
                  </form>
            </div>
      )
}

export default PostsForm
