import React, { useEffect, useState } from 'react'
import CommentAPI from '../fetch/CommentAPI'
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
      const [comments, setComments] = useState([])

      useEffect(() => {
            fetchAllComments()
      }, [])

      const fetchAllComments = async () => {
            try {
                  const data = await CommentAPI.findAll()
                  setComments(data)
                  console.log(data)
            } catch (error) {
                  console.log(error)
            }
      }

      return (
            <List style={{ marginTop: 30 }}>
                  {comments
                        .map((comment) => (
                              <ListItem
                                    alignItems="flex-start"
                                    key={comment.id}
                              >
                                    <ListItemAvatar>
                                          <Avatar />
                                    </ListItemAvatar>
                                    <ListItemText
                                          primary={comment.pseudo}
                                          secondary={
                                                <React.Fragment>
                                                      <Typography
                                                            component="span"
                                                            variant="subtitle1"
                                                            color="textSecondary"
                                                      >
                                                            {comment.content}
                                                      </Typography>
                                                </React.Fragment>
                                          }
                                    />
                              </ListItem>
                        ))
                        .reverse()}
                  <Divider variant="inset" component="li" />
            </List>
      )
}
