import React, { useEffect, useState } from 'react'
import MessageAPI from '../fetch/MessageAPI'
import PostsList from '../components/PostsList'
import { Grid, Box } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'

export default function WallPage() {
      const [isLoading, setIsLoading] = useState(true)
      const [posts, setPosts] = useState(null)

      useEffect(() => {
            fetchAllPosts()
      }, [])

      //utilisation de async await pour éviter les .then imbriqués
      const fetchAllPosts = async () => {
            try {
                  const data = await MessageAPI.findAll()
                  setTimeout(() => {
                        setPosts(data)
                        setIsLoading(false)
                  }, 2000)
            } catch (error) {
                  console.log(error)
            }
      }

      return (
            <Grid container spacing={2}>
                  <Grid item xs={12}>
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
      )
}
