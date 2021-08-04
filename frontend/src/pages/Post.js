import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_URL } from '../config'
import CommentForm from '../components/CommentForm'

import { Grid, Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export default function Post() {
      const { id } = useParams()
      let [postState, setPost] = useState(null)
      const [isLoading, setIsLoading] = useState(false)

      useEffect(() => {
            fetch(`${API_URL}/messages/${id}`)
                  .then((res) => res.json())
                  .then((res) => {
                        setPost(res)
                        setIsLoading(true)
                  })
      })

      return (
            <div>
                  <nav
                        style={{
                              paddingBottom: 20,
                              paddingTop: 20,
                        }}
                  >
                        <Link to="/wall">
                              <Button variant="contained" color="primary">
                                    <ArrowBackIcon
                                          style={{
                                                paddingRight: 10,
                                          }}
                                    />
                                    <span>Retour</span>
                              </Button>
                        </Link>
                  </nav>

                  <Grid container spacing={2}>
                        <Grid item xs={6}>
                              <div
                                    style={{
                                          marginTop: 50,
                                    }}
                              >
                                    {isLoading ? (
                                          <img
                                                alt="post"
                                                src={
                                                      API_URL +
                                                      postState.image.formats
                                                            .small.url
                                                }
                                          />
                                    ) : (
                                          'Loading...'
                                    )}
                              </div>
                        </Grid>
                        <Grid item xs={6}>
                              <h1>{isLoading ? postState.title : ''}</h1>
                              <p>{isLoading ? postState.content : ''}</p>
                        </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                        <CommentForm />
                  </Grid>
            </div>
      )
}
