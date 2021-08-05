import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MessageAPI from '../fetch/MessageAPI'

import PostForm from '../components/PostForm'
import PostsList from '../components/PostsList'

import { Grid, Box, Button } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

export default function Wall() {
      const [isLoading, setIsLoading] = useState(true)
      const [posts, setPosts] = useState(null)

      useEffect(() => {
            fetchAllPosts()
      }, [])

      //utilisation de async await pour éviter les .then imbriqués
      const fetchAllPosts = async () => {
            const data = await MessageAPI.findAll()
            setTimeout(() => {
                  setPosts(data)
                  setIsLoading(false)
            }, 3000)
      }

      return (
            <div className="wall">
                  <nav
                        style={{
                              paddingBottom: 20,
                              paddingTop: 20,
                        }}
                  >
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
                  <Grid container spacing={2}>
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
                                          <br />
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
                                                <PostsList
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
