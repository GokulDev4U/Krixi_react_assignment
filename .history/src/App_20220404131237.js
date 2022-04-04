import React, { useState } from "react";
// import { Counter } from "./features/counter/Counter";
import { Container, Grid, Button, Typography } from "@mui/material";
import Card from "./Components/card/Card";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  return (
    <div className="App">
      <Container sx={{ flexGrow: 1 }}>
        <Typography variant="h4">Eisenhower Matrix</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setTodo(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={}>
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
