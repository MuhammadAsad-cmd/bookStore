import { Box, Button, Link, Typography } from '@mui/material'
import React from 'react'


const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button LinkComponent={Link} to="/books/" variant='contained'
          sx={{ marginTop: 15, background: "orangered"}}>
          <Typography variant='h3'>
            View All Products
          </Typography>
        </Button>

      </Box>
    </div>
  )
}
export default Home
