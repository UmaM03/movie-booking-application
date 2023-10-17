import React from 'react'
import {AppBar,Autocomplete,Box,TextField,Toolbar} from "@mui/material"
import MovieIcon from '@mui/icons-material/Movie';
const dummyArray=["dog","cat","snake","bull"]
const Header = () => {
  return (
     <AppBar> 
      <Toolbar>
        <Box width={'20%'}>
          <MovieIcon/>
        </Box>

        <Box width={'50%'} margin={"auto"}> 
        <Autocomplete
        freeSolo
        options={dummyArray.map((option) => option)}
        renderInput={(params) => <TextField variant='standard' {...params} label="Search Movies" />}
      />

        </Box>

      </Toolbar>

     </AppBar>
  )
}

export default Header