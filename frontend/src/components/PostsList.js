import React from 'react'
import { API_URL } from '../config'
import { Link } from 'react-router-dom'

import {
      makeStyles,
      Avatar,
      IconButton,
      Typography,
      Divider,
} from '@material-ui/core'
import {
      Card,
      CardHeader,
      CardMedia,
      CardContent,
      CardActions,
} from '@material-ui/core'
import { indigo, red } from '@material-ui/core/colors'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ChatIcon from '@material-ui/icons/Chat'

const useStyles = makeStyles((theme) => ({
      root: {
            maxWidth: '100%',
            marginBottom: 30,
      },
      media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
      },
      avatar: {
            backgroundColor: red[500],
      },
      chatIcon: {
            color: indigo[500],
      },
}))

export default function CardPosts({ post }) {
      const classes = useStyles()

      return (
            <Card className={classes.root}>
                  <CardHeader
                        avatar={
                              <Avatar
                                    aria-label="recipe"
                                    className={classes.avatar}
                              >
                                    <PermIdentityIcon />
                              </Avatar>
                        }
                        action={
                              <IconButton aria-label="settings">
                                    <MoreVertIcon />
                              </IconButton>
                        }
                        title={post.title}
                        subheader={post.created_at.substring(0, 10)}
                  />

                  <CardMedia
                        className={classes.media}
                        image={
                              post.image !== null
                                    ? API_URL + post.image.formats.medium.url
                                    : '...'
                        }
                        title="Image du post"
                  />

                  <CardContent>
                        <Typography variant="body2" color="textSecondary">
                              {post.content && post.content.substring(0, 600)}
                              <Link to={`/post/${post.id}`}>
                                    {' '}
                                    ... Lire la suite
                              </Link>
                        </Typography>
                  </CardContent>

                  <Divider orientation="horizontal" />

                  <CardActions disableSpacing>
                        <Link to={`/post/${post.id}`}>
                              <IconButton
                                    aria-label="comments"
                                    className={classes.chatIcon}
                              >
                                    <ChatIcon
                                          style={{
                                                paddingRight: 10,
                                          }}
                                    />
                                    <Typography
                                          variant="body2"
                                          color="indigo[500]"
                                    >
                                          Afficher les commentaires{' '}
                                    </Typography>
                              </IconButton>
                        </Link>

                        <IconButton aria-label="favorites">
                              <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                              <ShareIcon />
                        </IconButton>
                  </CardActions>
            </Card>
      )
}
