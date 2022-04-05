import React, { useState } from "react";
import { Container, Grid, Button, Typography } from "@mui/material";
import Card from "./Components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  addDoFirst,
  removeDoFirst,
  selectTodoDoFirst,
} from "./features/todo/todoSlice";
import {
  addSchedule,
  removeSchedule,
  selectTodoSchedule,
} from "./features/todo/todoScheduleSlice";
import {
  addDelegate,
  removeDelegate,
  selectTodoDelegate,
} from "./features/todo/todoDelegateSlice";
import {
  addDontDo,
  removeDontDo,
  selectTodoDontDo,
} from "./features/todo/todoDontDoSlice";
import "./App.css";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

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
    const { destination, source } = result;
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
      const newTodo = todosDoFirst[source.index];
      dispatch(removeDoFirst(source.index));
      dispatch(addSchedule(newTodo));
    } else if (start === "doFirst" && finish === "delegate") {
      const newTodo = todosDoFirst[source.index];
      dispatch(removeDoFirst(source.index));
      dispatch(addDelegate(newTodo));
    } else if (start === "doFirst" && finish === "dontDo") {
      const newTodo = todosDoFirst[source.index];
      dispatch(removeDoFirst(source.index));
      dispatch(addDontDo(newTodo));
    } else if (start === "schedule" && finish === "doFirst") {
      const newTodo = todosSchedule[source.index];
      dispatch(removeSchedule(source.index));
      dispatch(addDoFirst(newTodo));
    } else if (start === "schedule" && finish === "delegate") {
      const newTodo = todosSchedule[source.index];
      dispatch(removeSchedule(source.index));
      dispatch(addDelegate(newTodo));
    } else if (start === "schedule" && finish === "dontDo") {
      const newTodo = todosSchedule[source.index];
      dispatch(removeSchedule(source.index));
      dispatch(addDontDo(newTodo));
    } else if (start === "delegate" && finish === "doFirst") {
      const newTodo = todosDelegate[source.index];
      dispatch(removeDelegate(source.index));
      dispatch(addDoFirst(newTodo));
    } else if (start === "delegate" && finish === "schedule") {
      const newTodo = todosDelegate[source.index];
      dispatch(removeDelegate(source.index));
      dispatch(addSchedule(newTodo));
    } else if (start === "delegate" && finish === "dontDo") {
      const newTodo = todosDelegate[source.index];
      dispatch(removeDelegate(source.index));
      dispatch(addDontDo(newTodo));
    } else if (start === "dontDo" && finish === "doFirst") {
      const newTodo = todosDontDo[source.index];
      dispatch(removeDontDo(source.index));
      dispatch(addDoFirst(newTodo));
    } else if (start === "dontDo" && finish === "schedule") {
      const newTodo = todosDontDo[source.index];
      dispatch(removeDontDo(source.index));
      dispatch(addSchedule(newTodo));
    } else if (start === "dontDo" && finish === "delegate") {
      const newTodo = todosDontDo[source.index];
      dispatch(removeDontDo(source.index));
      dispatch(addDelegate(newTodo));
    }

    //   if (start === "doFirst" ) {
    //   const newTodosDoFirst = Array.from(todosDoFirst);
    //   const [removed] = newTodosDoFirst.splice(source.index, 1);
    //   newTodosDoFirst.splice(destination.index, 0, removed);
    //   dispatch(removeDoFirst());
    //   dispatch(addDoFirst(newTodosDoFirst));
    // } else if (start === "schedule") {
    //   const newTodosSchedule = Array.from(todosSchedule);
    //   const [removed] = newTodosSchedule.splice(source.index, 1);
    //   newTodosSchedule.splice(destination.index, 0, removed);
    //   dispatch(removeSchedule());
    //   dispatch(addSchedule(newTodosSchedule));
    // } else if (start === "delegate") {
    //   const newTodosDelegate = Array.from(todosDelegate);
    //   const [removed] = newTodosDelegate.splice(source.index, 1);
    //   newTodosDelegate.splice(destination.index, 0, removed);
    //   dispatch(removeDelegate());
    //   dispatch(addDelegate(newTodosDelegate));
    // } else if (start === "dontDo") {
    //   const newTodosDontDo = Array.from(todosDontDo);
    //   const [removed] = newTodosDontDo.splice(source.index, 1);
    //   newTodosDontDo.splice(destination.index, 0, removed);
    //   dispatch(removeDontDo());
    //   dispatch(addDontDo(newTodosDontDo));
    // }

    // if (start === "doFirst" && finish === "schedule") {
    //   dispatch(addSchedule(todosSchedule[destination.index]));
    //   dispatch(removeDoFirst(todosDoFirst[source.index]));
    // } else if (start === "doFirst" && finish === "delegate") {
    //   dispatch(addDelegate(todosDelegate[destination.index]));
    //   dispatch(removeDoFirst(todosDoFirst[source.index]));
    // } else if (start === "doFirst" && finish === "dontDo") {
    //   dispatch(addDontDo(todosDontDo[destination.index]));
    //   dispatch(removeDoFirst(todosDoFirst[source.index]));
    // } else if (start === "schedule" && finish === "doFirst") {
    //   dispatch(addDoFirst(todosDoFirst[destination.index]));
    //   dispatch(removeSchedule(todosSchedule[source.index]));
    // } else if (start === "schedule" && finish === "delegate") {
    //   dispatch(addDelegate(todosDelegate[destination.index]));
    //   dispatch(removeSchedule(todosSchedule[source.index]));
    // } else if (start === "schedule" && finish === "dontDo") {
    //   dispatch(addDontDo(todosDontDo[destination.index]));
    //   dispatch(removeSchedule(todosSchedule[source.index]));
    // } else if (start === "delegate" && finish === "doFirst") {
    //   dispatch(addDoFirst(todosDoFirst[destination.index]));
    //   dispatch(removeDelegate(todosDelegate[source.index]));
    // } else if (start === "delegate" && finish === "schedule") {
    //   dispatch(addSchedule(todosSchedule[destination.index]));
    //   dispatch(removeDelegate(todosDelegate[source.index]));
    // } else if (start === "delegate" && finish === "dontDo") {
    //   dispatch(addDontDo(todosDontDo[destination.index]));
    //   dispatch(removeDelegate(todosDelegate[source.index]));
    // } else if (start === "dontDo" && finish === "doFirst") {
    //   dispatch(addDoFirst(todosDoFirst[destination.index]));
    //   dispatch(removeDontDo(todosDontDo[source.index]));
    // } else if (start === "dontDo" && finish === "schedule") {
    //   dispatch(addSchedule(todosSchedule[destination.index]));
    //   dispatch(removeDontDo(todosDontDo[source.index]));
    // } else if (start === "dontDo" && finish === "delegate") {
    //   dispatch(addDelegate(todosDelegate[destination.index]));
    //   dispatch(removeDontDo(todosDontDo[source.index]));
    // }
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
              <Card
                color="green"
                title="Do First"
                flag="doFirst"
                id={uuidv4()}
              />
            </Grid>
            <Grid item xs={6}>
              <Card
                color="blue"
                title="Schedule"
                flag="schedule"
                id={uuidv4()}
              />
            </Grid>
            <Grid item xs={6}>
              <Card
                color="orange"
                title="Delegate"
                flag="delegate"
                id={uuidv4()}
              />
            </Grid>
            <Grid item xs={6}>
              <Card color="red" title="Don’t Do" flag="dontDo" id={uuidv4()} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </DragDropContext>
  );
}

export default App;
