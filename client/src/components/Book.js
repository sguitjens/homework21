import React from "react";
import { Card, CardHeader, CardContent, Grid, ButtonGroup, Button } from '@material-ui/core';

function Book(props) {
  console.log("BOOK PROPS", props);
  return (
    <Card>
      <CardHeader
        action={
          <ButtonGroup color="secondary">
            <Button variant="contained" color="default">{props.leftButton}</Button>
            <Button variant="contained" color="default">{props.rightButton}</Button>
          </ButtonGroup>
        } />
        {props.children}
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <img src={props.image} alt="book thumbnail"></img>
          </Grid>
          <Grid item xs={9}>
            <h3>{props.title}</h3>
            <h5>Authors: {props.author}</h5>
            {/* <h5>Authors: {props.author.forEach((author, index) => (
              author + ", "
            ))}</h5> */}
            <p><strong>Description:</strong> {props.description}</p> 
            <a href={props.infoLink} target="_blank" rel="noopener noreferrer">More Information</a>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Book;