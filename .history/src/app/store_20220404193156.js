import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import todoReducer from "../features/todo/todoSlice";
import todoScheduleReducer from "../features/todo/todoScheduleSlice";
import todoDelegateReducer from "../features/todo/todoDelegateSlice";
import todoDontDoReducer from "../features/todo/todoDontDoSlice";

const reducers = combineReducers({
  todo: todoReducer,
  todoSchedule: todoScheduleReducer,
  todoDelegate: todoDelegateReducer,
  todoDontDo: todoDontDoReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});
