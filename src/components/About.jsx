// import { Box, Typography } from '@mui/material'
import React from 'react'
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{fontFamily:"fantasy"}} variant='h2'>
          This is an Crud Application
        </Typography>
        <Typography sx={{fontFamily:"fantasy"}}  variant='h2'>
          By MERN STACK
        </Typography>

      </Box>
    </div>
  )
}

export default About
