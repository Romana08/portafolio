import { Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import React from 'react'

const StartRating = ({stars}) => {
  return (
    <div>
        <Box component="fieldset" borderColor="transparent">
            <Rating name='read-only' readOnly value={stars}></Rating>
        </Box>
    </div>
  )
}

export default StartRating