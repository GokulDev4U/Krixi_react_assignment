import React, { useState } from "react";
import { Container, Grid, Button, Typography } from "@mui/material";
import Card from "./Components/card/Card";
import { useDispatch } from "react-redux";
import { addDoFirst } from "./features/todo/todoSlice";
import { addSchedule } from "./features/todo/todoScheduleSlice";
import { addDelegate } from "./features/todo/todoDelegateSlice";
import { addDontDo } from "./features/todo/todoDontDoSlice";
import { useDrop } from "react-dnd";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  let finalTodo = todo;
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleDoFirstButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (todo.length > 0) {
      dispatch(addDoFirst(finalTodo));
      setTodo("");
    }
  };
  const handleScheduleButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (todo.length > 0) {
      dispatch(addSchedule(finalTodo));
      setTodo("");
    }
  };
  const handleDelegateButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (todo.length > 0) {
      dispatch(addDelegate(finalTodo));
      setTodo("");
    }
  };
  const handleDontDoButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (todo.length > 0) {
      dispatch(addDontDo(finalTodo));
      setTodo("");
    }
  };

  const [, drop] = useDrop({
    accept: "card",
    drop: (item, monitor) => {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }
      const { id, text } = item;
      if (id === "doFirst") {
        dispatch(addDoFirst(text));
      } else if (id === "schedule") {
        dispatch(addSchedule(text));
      } else if (id === "delegate") {
        dispatch(addDelegate(text));
      } else if (id === "dontDo") {
        dispatch(addDontDo(text));
      }
    },
  });

  return (
    <div className="App">
      <Container sx={{ flexGrow: 1 }}>
        <Typography variant="h4">Eisenhower Matrix</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <input
              type="text"
              placeholder="Add a todo"
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
              onClick={handleScheduleButtonClick}
            >
              Add to - Schedule
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleDelegateButtonClick}
            >
              Add to - Delegate
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleDontDoButtonClick}
            >
              Add to - Don’t Do
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Card color="green" title="Do First" flag="doFirst" />
          </Grid>
          <Grid item xs={6}>
            <Card color="blue" title="Schedule" flag="schedule" />
          </Grid>
          <Grid item xs={6}>
            <Card color="orange" title="Delegate" flag="delegate" />
          </Grid>
          <Grid item xs={6}>
            <Card color="red" title="Don’t Do" flag="dontDo" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
