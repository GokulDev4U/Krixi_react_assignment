import React, { useState } from "react";
// import { Counter } from "./features/counter/Counter";
import { Container, Grid, Button, Typography } from "@mui/material";
import Card from "./Components/card/Card";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addDoFirst,
  remove,
  edit,
  addSchedule,
  addDelegate,
  addDontDo,
} from "./features/todo/todoSlice";

function App() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  let finalTodo = todo;
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleDoFirstButtonClick = (e) => {
    e.preventDefault();
    dispatch(addDoFirst(finalTodo));
    setTodo("");
  };
  const handleScheduleButtonClick = (e) => {
    e.preventDefault();
    dispatch(addSchedule(finalTodo));
    setTodo("");
  };
  const handleDelegateButtonClick = (e) => {
    e.preventDefault();
    dispatch(addDelegate(finalTodo));
    setTodo("");
  };
  const handleDontDoButtonClick = (e) => {
    e.preventDefault();
    dispatch(addDontDo(finalTodo));
    setTodo("");
  };
  return (
    <div className="App">
      <Container sx={{ flexGrow: 1 }}>
        <Typography variant="h4">Eisenhower Matrix</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <input
              type="text"
              placeholder="Search"
              value={todo}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleDoFirstButtonClick}
            >
              Add to - do first
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleButtonClick}
            >
              Add to - Schedule
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleButtonClick}
            >
              Add to - Delegate
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleButtonClick}
            >
              Add to - Don’t Do
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