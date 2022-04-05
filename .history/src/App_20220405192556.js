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

    const filterTodos = (todos) => {
      return todos.filter((todo) => {
        return todo.id !== result.draggableId;
      });
    };

    // const itemCopy = { ...todo[source.droppableId].items[source.index] };

    // setTodo((prev) => {
    //   prev = { ...prev };
    //   // Remove from previous items array
    //   prev[source.droppableId].splice(source.index, 1);
    //   // Adding to new items array location
    //   prev[destination.droppableId].splice(destination.index, 0, itemCopy);
    //   return prev;
    // });

    if (start === "doFirst" && finish === "schedule") {
      dispatch(removeSchedule(todosSchedule[destination.index]));
      dispatch(addDoFirst(todosDoFirst[source.index]));
    } else if (start === "doFirst" && finish === "delegate") {
      dispatch(removeDelegate(todosDelegate[destination.index]));
      dispatch(addDoFirst(todosDoFirst[source.index]));
    } else if (start === "doFirst" && finish === "dontDo") {
      dispatch(removeDontDo(todosDontDo[destination.index]));
      dispatch(addDoFirst(todosDoFirst[source.index]));
    } else if (start === "schedule" && finish === "doFirst") {
      dispatch(removeDoFirst(todosDoFirst[destination.index]));
      dispatch(addSchedule(todosSchedule[source.index]));
    } else if (start === "schedule" && finish === "delegate") {
      dispatch(removeDelegate(todosDelegate[destination.index]));
      dispatch(addSchedule(todosSchedule[source.index]));
    } else if (start === "schedule" && finish === "dontDo") {
      dispatch(removeDontDo(todosDontDo[destination.index]));
      dispatch(addSchedule(todosSchedule[source.index]));
    } else if (start === "delegate" && finish === "doFirst") {
      dispatch(removeDoFirst(todosDoFirst[destination.index]));
      dispatch(addDelegate(todosDelegate[source.index]));
    } else if (start === "delegate" && finish === "schedule") {
      dispatch(removeSchedule(todosSchedule[destination.index]));
      dispatch(addDelegate(todosDelegate[source.index]));
    } else if (start === "delegate" && finish === "dontDo") {
      dispatch(removeDontDo(todosDontDo[destination.index]));
      dispatch(addDelegate(todosDelegate[source.index]));
    } else if (start === "dontDo" && finish === "doFirst") {
      dispatch(removeDoFirst(todosDoFirst[destination.index]));
      dispatch(addDontDo(todosDontDo[source.index]));
    } else if (start === "dontDo" && finish === "schedule") {
      dispatch(removeSchedule(todosSchedule[destination.index]));
      dispatch(addDontDo(todosDontDo[source.index]));
    } else if (start === "dontDo" && finish === "delegate") {
      dispatch(removeDelegate(todosDelegate[destination.index]));
      dispatch(addDontDo(todosDontDo[source.index]));
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
