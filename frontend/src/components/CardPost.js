import React from 'react'
import { API_URL } from '../config'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import MoreVertIcon from '@material-ui/icons/MoreVert'
//import CardActions from '@material-ui/core/CardActions'
//import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
      root: {
            maxWidth: '100%',
      },
      media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
      },
      avatar: {
            backgroundColor: red[500],
      },
}))

export default function CardPost({ post }) {
      const classes = useStyles()

      return (
            <Card
                  className={classes.root}
                  style={{
                        marginBottom: 30,
                  }}
            >
                  <CardHeader
                        avatar={
                              <Avatar
                                    aria-label="recipe"
                                    className={classes.avatar}
                              >
                                    R
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
                                    ? API_URL + post.image[0].formats.medium.url
                                    : '...'
                        }
                        title="Image du post"
                  />

                  <CardContent>
                        <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                        >
                              {post.content}
                        </Typography>
                  </CardContent>

                  {/* <CardActions>
                        <Button size="small">Learn More</Button>
                  </CardActions> */}
            </Card>
      )
}
