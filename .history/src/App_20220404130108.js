import React from "react";
// import { Counter } from "./features/counter/Counter";
import { Container, Grid, Button, Typography } from "@mui/material";
import Card from "./Components/card/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Typography variant="h6">Hello World</Typography>
          <Grid item xs={12}>
            <input type="text" placeholder="Search" />
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Card color="green" title="Do First" />
          </Grid>
          <Grid item xs={6}>
            <Card color="blue" title="Schedule" />
          </Grid>
          <Grid item xs={6}>
            <Card color="orange" title="Delegate" />
          </Grid>
          <Grid item xs={6}>
            <Card color="red" title="Don’t Do" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
