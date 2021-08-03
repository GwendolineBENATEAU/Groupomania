import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ChatIcon from '@material-ui/icons/Chat'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'

export default function CardComment() {
      return (
            <Card>
                  <Divider orientation="horizontal" />
                  <CardContent>
                        <Grid container spacing={0}>
                              <Grid
                                    item
                                    xs={4}
                                    style={{
                                          textAlign: 'center',
                                    }}
                              >
                                    <IconButton aria-label="favorites">
                                          <ChatIcon
                                                style={{
                                                      paddingRight: 30,
                                                }}
                                          />
                                          <Typography>Je commente</Typography>
                                    </IconButton>
                              </Grid>
                              <Grid item xs={4}>
                                    <IconButton aria-label="share">
                                          <ShareIcon
                                                style={{
                                                      paddingRight: 30,
                                                }}
                                          />
                                          <Typography>Je partage</Typography>
                                    </IconButton>
                              </Grid>
                              <Grid item xs={4}>
                                    <IconButton aria-label="favorites">
                                          <FavoriteIcon
                                                style={{
                                                      paddingRight: 30,
                                                }}
                                          />
                                          <Typography>J'aime</Typography>
                                    </IconButton>
                              </Grid>
                        </Grid>
                  </CardContent>
                  <Divider orientation="horizontal" />
                  <CardActions>
                        <p> ici la liste des commentaires </p>
                  </CardActions>
            </Card>
      )
}
