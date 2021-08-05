import React from 'react'

import {
      List,
      ListItem,
      ListItemText,
      ListItemAvatar,
      Avatar,
      Divider,
      Typography,
} from '@material-ui/core'

export default function CommentsList() {
      return (
            <List style={{ marginTop: 30 }}>
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
      )
}
