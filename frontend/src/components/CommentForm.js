import React, { useState } from 'react'
import CommentAPI from '../fetch/CommentAPI'
import { Button, TextField } from '@material-ui/core'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'

const CommentForm = (props) => {
      const [comment, setComment] = useState({})

      const handleSubmit = async () => {
            try {
                  await CommentAPI.create(comment)
                  //props.fetchAllComments()
            } catch (error) {
                  console.log(error)
            }
      }

      const handleChange = ({ currentTarget }) => {
            const { name, value } = currentTarget
            setComment({
                  ...comment,
                  message: props.id,
                  [name]: value,
            })
      }

      return (
            <form onSubmit={handleSubmit}>
                  <TextField
                        onChange={handleChange}
                        id="pseudo"
                        name="pseudo"
                        label="Prénom"
                        type="text"
                        placeholder="Renseignez votre prénom"
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
                        label="Commentaire"
                        type="text"
                        placeholder="... et écrivez votre commentaire …"
                        fullWidth
                        multiline
                        margin="normal"
                        InputLabelProps={{
                              shrink: true,
                        }}
                        variant="outlined"
                  />
                  <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ marginTop: 20 }}
                  >
                        <SendOutlinedIcon
                              style={{
                                    paddingRight: 10,
                              }}
                        />
                        <span>Envoyer</span>
                  </Button>
            </form>
      )
}
export default CommentForm
