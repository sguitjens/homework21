import React from "react";
import { AppBar, Toolbar, Button, Grid } from '@material-ui/core';

function Header(props) {
  console.log("HEADER PROPS", props);
  return (
    <AppBar position="static">   
      <Toolbar>
        <Grid container spacing={3}>
          <Grid item sm={9} xs={12}>
            <div>Google Books Search</div>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Button color="inherit">Search</Button>
            <Button color="inherit">Saved</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;