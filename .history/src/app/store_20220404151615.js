import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import todoReducer from "../features/todo/todoScheduleSlice";
import todoReducer from "../features/todo/todoDelegateSlice";
import todoReducer from "../features/todo/todoDontDoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    todo: todoReducer,
    todo: todoReducer,
    todo: todoReducer,
  },
});
