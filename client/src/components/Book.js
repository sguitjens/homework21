import React from "react";
import { Card, CardHeader, CardContent, Grid, ButtonGroup, Button } from '@material-ui/core';
import API from "../pages/utils/API";

function Book(props) {

  function handleSaveClick(event) {
    event.preventDefault();
    // API.saveBook(props);
  }

  // console.log("BOOK PROPS", props);
  return (
    <Card>
      <CardHeader
        action={
          <ButtonGroup color="secondary">
            <a href={props.infoLink} target="_blank" rel="noopener noreferrer">
              <Button variant="contained" color="default">{props.leftButton}</Button>
            </a>
            <Button variant="contained" color="default" onClick={event => props.handleClick(event, props.id)}>{props.rightButton}</Button>
          </ButtonGroup>
        } />
        {/* {props.children} */}
      <CardContent>
        <Grid container spacing={3}>
          <Grid item sm={3} xs={12}>
            <img src={props.image} alt="book thumbnail"></img>
          </Grid>
          <Grid item sm={9} xs={12}>
            <h3>{props.title}</h3>
            {/* <h5>Authors: {props.authors.join()}</h5> */}
            <h5>Authors: {props.authors}</h5>
            <p><strong>Description:</strong> {props.description}</p> 
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Book;