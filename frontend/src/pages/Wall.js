import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PostForm from '../components/PostForm'
import CardPost from '../components/CardPost'
import { API_URL } from '../config'

import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Skeleton from '@material-ui/lab/Skeleton'
import Button from '@material-ui/core/Button'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

export default function Wall() {
      const [isLoading, setIsLoading] = useState(true)
      const [posts, setPosts] = useState(null)

      useEffect(() => {
            fetch(`${API_URL}/messages`)
                  .then((res) => res.json())
                  .then((response) => {
                        setTimeout(() => {
                              setPosts(response)
                              setIsLoading(false)
                        }, 2000)
                  })
      }, [])

      return (
            <div className="wall">
                  <nav>
                        <Link to="/">
                              <Button
                                    variant="contained"
                                    style={{ float: 'right' }}
                              >
                                    <ExitToAppIcon
                                          style={{
                                                paddingRight: 10,
                                          }}
                                    />
                                    <span>Déconnexion</span>
                              </Button>
                        </Link>
                  </nav>
                  <Grid container spacing={3}>
                        <Grid item xs={12}>
                              <h2>Créer une publication</h2>

                              <PostForm />

                              <h2>Dernières publications</h2>

                              {isLoading ? (
                                    <Box>
                                          <Skeleton
                                                animation="wave"
                                                variant="circle"
                                                width={50}
                                                height={50}
                                                style={{
                                                      marginBottom: 20,
                                                }}
                                          />
                                          <Skeleton
                                                animation="wave"
                                                variant="rect"
                                                width="100%"
                                                height={250}
                                                style={{
                                                      marginBottom: 20,
                                                }}
                                          />
                                          <Skeleton width="100%" />
                                          <Skeleton width="100%" />
                                          <Skeleton width="40%" />
                                    </Box>
                              ) : (
                                    posts
                                          .map((post) => (
                                                <CardPost
                                                      post={post}
                                                      key={post.id}
                                                />
                                          ))
                                          .reverse()
                              )}
                        </Grid>
                  </Grid>
            </div>
      )
}
