import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { SearchField } from "components/SearchField";

export const NavBar = () => {
  return (
    <AppBar position="static" style={{backgroundColor: "#272727"}}>
      <Toolbar>
        <Typography variant="h5">Parts</Typography>
        <SearchField/>
        <IconButton color="inherit" style={{marginLeft: 14}} >
          <AccountCircle/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
