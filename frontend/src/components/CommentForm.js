import React, { useState } from 'react'
import CommentAPI from '../fetch/CommentAPI'
import { Button, TextField } from '@material-ui/core'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'

const CommentForm = (props) => {
      const [comment, setComment] = useState({})

      const handleSubmit = async () => {
            console.log(comment)
            try {
                  const data = CommentAPI.create(comment)
                  console.log(data)
                  props.fetchAllComments()
            } catch (error) {
                  console.log(error)
            }
      }

      const handleChange = ({ currentTarget }) => {
            //const name = currentTarget.name
            //const value = currentTarget.value
            const { name, value } = currentTarget
            setComment({
                  //prend l'ancienne valeur du champ et rajoute à la suite les autres valeurs
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
                        label="Pseudo"
                        type="text"
                        placeholder="Renseignez votre nom …"
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

////////////////////////////////
/*export default function CommentForm() {
      const [comment, setComment] = useState({})
      const handleSubmit = (event) => {
            event.preventDefault()
      }
      try {
            //const data = axios.post(`${API_URL}/comments`, comment)
            //console.log(data)
      } catch (error) {
            console.log(error)
      }
      const handleChange = ({ currentTarget }) => {
            const { name, value } = currentTarget
            setComment({
                  ...comment,
                  [name]: value,
            })
      } 

      return (
            <Grid container spacing={2}>
                  <Grid item xs={12}>
                        <form onSubmit={handleSubmit}>
                              <TextField
                                    onChange={handleChange}
                                    id="content"
                                    name="content"
                                    label="Commentaire"
                                    type="text"
                                    style={{ marginTop: 80 }}
                                    placeholder="Réagissez, écrivez votre commentaire …"
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
                  </Grid>
                  <CommentsList />
            </Grid>
      )
}*/
////////////////////////////
