import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_URL } from '../config'
import MessageAPI from '../fetch/MessageAPI'
import CommentForm from '../components/CommentForm'
import CommentsList from '../components/CommentsList'
import { Grid, Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export default function PostPage() {
      const { id } = useParams()
      const [postState, setPost] = useState(null)
      const [isLoading, setIsLoading] = useState(false)

      useEffect(() => {
            fetchOnePost()
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      const fetchOnePost = async () => {
            try {
                  const data = await MessageAPI.findOne(id)
                  setPost(data)
                  setIsLoading(true)
            } catch (error) {
                  console.log(error)
            }
      }

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
                        <Grid item xs={12}>
                              <h2>{isLoading ? postState.title : ''}</h2>
                              <p>{isLoading ? postState.content : ''}</p>
                              {isLoading ? (
                                    <img
                                          style={{
                                                width: '100%',
                                                marginTop: 30,
                                          }}
                                          alt={postState.title}
                                          src={API_URL + postState.image.url}
                                    />
                              ) : (
                                    'Loading...'
                              )}

                              <h2 style={{ marginTop: 80 }}>Réagissez !</h2>

                              <CommentForm id={id} />
                              <CommentsList />
                        </Grid>
                  </Grid>
            </div>
      )
}
