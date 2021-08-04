import React from 'react'
import { Grid, Button, List } from '@material-ui/core'
//import { useEffect, useState } from 'react'
//import { useParams, Link } from 'react-router-dom'
//import { API_URL } from '../config'

import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

export default function CommentForm() {
      return (
            <Grid container spacing={2}>
                  <Grid item xs={12}>
                        <form>
                              <TextField
                                    id="outlined-full-width"
                                    label="Commentaire"
                                    type="text"
                                    style={{ marginTop: 60 }}
                                    placeholder="Réagissez ! Écrivez votre commentaire …"
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
                  </Grid>
                  <Grid item xs={12}>
                        <List style={{ marginTop: 20 }}>
                              <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                          <Avatar
                                                alt="Remy Sharp"
                                                src="/static/images/avatar/1.jpg"
                                          />
                                    </ListItemAvatar>
                                    <ListItemText
                                          primary="Brunch this weekend?"
                                          secondary={
                                                <React.Fragment>
                                                      <Typography
                                                            component="span"
                                                            variant="body2"
                                                            color="textPrimary"
                                                      >
                                                            Ali Connors
                                                      </Typography>
                                                      {
                                                            " — I'll be in your neighborhood doing errands this…"
                                                      }
                                                </React.Fragment>
                                          }
                                    />
                              </ListItem>
                              <Divider variant="inset" component="li" />
                              <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                          <Avatar
                                                alt="Remy Sharp"
                                                src="/static/images/avatar/1.jpg"
                                          />
                                    </ListItemAvatar>
                                    <ListItemText
                                          primary="Brunch this weekend?"
                                          secondary={
                                                <React.Fragment>
                                                      <Typography
                                                            component="span"
                                                            variant="body2"
                                                            color="textPrimary"
                                                      >
                                                            Ali Connors
                                                      </Typography>
                                                      {
                                                            " — I'll be in your neighborhood doing errands this…"
                                                      }
                                                </React.Fragment>
                                          }
                                    />
                              </ListItem>
                              <Divider variant="inset" component="li" />
                              <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                          <Avatar
                                                alt="Remy Sharp"
                                                src="/static/images/avatar/1.jpg"
                                          />
                                    </ListItemAvatar>
                                    <ListItemText
                                          primary="Brunch this weekend?"
                                          secondary={
                                                <React.Fragment>
                                                      <Typography
                                                            component="span"
                                                            variant="body2"
                                                            color="textPrimary"
                                                      >
                                                            Ali Connors
                                                      </Typography>
                                                      {
                                                            " — I'll be in your neighborhood doing errands this…"
                                                      }
                                                </React.Fragment>
                                          }
                                    />
                              </ListItem>
                              <Divider variant="inset" component="li" />
                        </List>
                  </Grid>
            </Grid>
      )
}
