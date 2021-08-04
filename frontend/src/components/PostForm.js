import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import Card from '@material-ui/core/Card'

const useStyles = makeStyles((theme) => ({
      root: {
            maxWidth: '100%',
            marginBottom: 30,
      },

      avatar: {
            backgroundColor: green[500],
      },
}))

export default function PostForm() {
      const classes = useStyles()
      return (
            <Card className={classes.root}>
                  <p>ici mettre le formulaire pour poster des messages</p>
            </Card>
      )
}
