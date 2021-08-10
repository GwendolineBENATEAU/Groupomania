import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MessageAPI from '../fetch/MessageAPI'
import {
      List,
      ListItem,
      ListItemText,
      ListItemAvatar,
      Avatar,
      Typography,
} from '@material-ui/core'

export default function CommentsList() {
      const { id } = useParams()
      const [comments, setComments] = useState([])

      useEffect(() => {
            fetchComments()
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      const fetchComments = async () => {
            try {
                  const data = await MessageAPI.findComments(id)
                  setComments(data)
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
                                          primary={
                                                <React.Fragment>
                                                      {comment.pseudo}

                                                      <Typography
                                                            component="span"
                                                            variant="subtitle2"
                                                            color="textSecondary"
                                                      >
                                                            {' - '}
                                                            {comment.created_at.substring(
                                                                  0,
                                                                  10
                                                            )}
                                                      </Typography>
                                                </React.Fragment>
                                          }
                                          secondary={
                                                <Typography
                                                      component="span"
                                                      variant="subtitle1"
                                                      color="textSecondary"
                                                >
                                                      {comment.content}
                                                </Typography>
                                          }
                                    />
                              </ListItem>
                        ))
                        .reverse()}
            </List>
      )
}
