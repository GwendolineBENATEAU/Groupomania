import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import MessageAPI from '../fetch/MessageAPI'
import { Button, TextField } from '@material-ui/core'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import axios from 'axios'

const PostsForm = () => {
      const history = useHistory()
      const [credentials, setCredentials] = useState({
            title: '',
            content: '',
            image: '',
      })
      const handleChange = ({ currentTarget }) => {
            const { name, value } = currentTarget
            setCredentials({
                  ...credentials,
                  [name]: value,
                  ////////////////////////
                  image: currentTarget.files,
            })
      }
      const handleSubmit = async (event) => {
            event.preventDefault()

            console.log(credentials)

            //////////////////////////////////
            const data = new FormData()
            data.append('files', credentials)
            /////////////////////////

            try {
                  await MessageAPI.create(credentials)
                  history.replace('/')
                  ///////////////////////////////
                  const upload = await axios({
                        method: 'POST',
                        url: 'http://localhost:1337/upload',
                        data,
                  })
                  console.log('fileUpload.hadleSubmit', upload)
                  /////////////////////////////
            } catch (error) {
                  console.log(error)
            }
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

                        <input
                              onChange={handleChange}
                              id="image"
                              name="image"
                              type="file"
                              accept="image/*"
                              style={{ marginTop: 30 }}
                        />

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
