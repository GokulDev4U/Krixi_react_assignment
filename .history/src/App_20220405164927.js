import React, { useState } from "react";
import { Container, Grid, Button, Typography } from "@mui/material";
import Card from "./Components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { addDoFirst, selectTodoDoFirst } from "./features/todo/todoSlice";
import {
  addSchedule,
  selectTodoSchedule,
} from "./features/todo/todoScheduleSlice";
import {
  addDelegate,
  selectTodoDelegate,
} from "./features/todo/todoDelegateSlice";
import { addDontDo, selectTodoDontDo } from "./features/todo/todoDontDoSlice";
import "./App.css";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const dispatch = useDispatch();
  const todosDoFirst = useSelector(selectTodoDoFirst);
  const todosSchedule = useSelector(selectTodoSchedule);
  const todosDelegate = useSelector(selectTodoDelegate);
  const todosDontDo = useSelector(selectTodoDontDo);
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

  const handleOnDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const start = source.droppableId;
    const finish = destination.droppableId;
    if (start === "doFirst" && finish === "schedule") {
      dispatch(addSchedule(finalTodo));
      dispatch(addDoFirst(finalTodo));
    } else if (start === "doFirst" && finish === "delegate") {
      dispatch(addDelegate(finalTodo));
      dispatch(addDoFirst(finalTodo));
    } else if (start === "doFirst" && finish === "dontDo") {
      dispatch(addDontDo(finalTodo));
      dispatch(addDoFirst(finalTodo));
    } else if (start === "schedule" && finish === "doFirst") {
      dispatch(addDoFirst(finalTodo));
      dispatch(addSchedule(finalTodo));
    } else if (start === "schedule" && finish === "delegate") {
      dispatch(addDelegate(finalTodo));
      dispatch(addSchedule(finalTodo));
    } else if (start === "schedule" && finish === "dontDo") {
      dispatch(addDontDo(finalTodo));
      dispatch(addSchedule(finalTodo));
    } else if (start === "delegate" && finish === "doFirst") {
      dispatch(addDoFirst(finalTodo));
      dispatch(addDelegate(finalTodo));
    } else if (start === "delegate" && finish === "schedule") {
      dispatch(addSchedule(finalTodo));
      dispatch(addDelegate(finalTodo));
    } else if (start === "delegate" && finish === "dontDo") {
      dispatch(addDontDo(finalTodo));
      dispatch(addDelegate(finalTodo));
    } else if (start === "dontDo" && finish === "doFirst") {
      dispatch(addDoFirst(finalTodo));
      dispatch(addDontDo(finalTodo));
    } else if (start === "dontDo" && finish === "schedule") {
      dispatch(addSchedule(finalTodo));
      dispatch(addDontDo(finalTodo));
    } else if (start === "dontDo" && finish === "delegate") {
      dispatch(addDelegate(finalTodo));
      dispatch(addDontDo(finalTodo));
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
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
    </DragDropContext>
  );
}

export default App;
