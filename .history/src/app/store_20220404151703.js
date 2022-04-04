import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import todoScheduleReducer from "../features/todo/todoScheduleSlice";
import todoDelegateReducer from "../features/todo/todoDelegateSlice";
import todoDontDoReducer from "../features/todo/todoDontDoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    todo: todoReducer,
    todo: todoReducer,
    todo: todoReducer,
  },
});
