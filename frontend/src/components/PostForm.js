import React from 'react'

import { makeStyles, Button, Card, TextField } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'

const useStyles = makeStyles((theme) => ({
      root: {
            maxWidth: '100%',
            marginBottom: 30,
            padding: 20,
      },

      avatar: {
            backgroundColor: green[500],
      },
}))

export default function PostForm() {
      const classes = useStyles()
      return (
            <Card className={classes.root}>
                  <form>
                        <TextField
                              id="title"
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
                              id="content"
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
                        <Button
                              variant="contained"
                              color="primary"
                              style={{ marginTop: 10 }}
                        >
                              <SendOutlinedIcon
                                    style={{
                                          paddingRight: 10,
                                    }}
                              />
                              <span>Envoyer</span>
                        </Button>
                  </form>
            </Card>
      )
}
