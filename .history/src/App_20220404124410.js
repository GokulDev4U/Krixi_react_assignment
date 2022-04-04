import React from "react";
// import { Counter } from "./features/counter/Counter";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "./Components/card/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <input type="text" placeholder="Search" />
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Card color="" title="" />
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
      </Box>
    </div>
  );
}

export default App;
