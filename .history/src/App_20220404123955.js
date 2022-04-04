import React from "react";
// import { Counter } from "./features/counter/Counter";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./App.css";
import Card from "./Components/card/Card";

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card />
        </Grid>
        <Grid item xs={6}>
          <Card />
        </Grid>
        <Grid item xs={6}>
          <Card />
        </Grid>
        <Grid item xs={6}>
          <Card />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
