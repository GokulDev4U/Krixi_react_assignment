import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    schedule: [],
    id: uuidv4(),
};

export const todoScheduleSlice = createSlice({
    name: "todoSchedule",
    initialState,
    reducers: {
        addSchedule: (state, action) => {
            state.schedule.push(action.payload);
        },
        removeSchedule: (state, action) => {
            state.doFirst.filter(item => item.id !== action.payload);
        },
    },
});

export const { addSchedule, removeSchedule, edit } = todoScheduleSlice.actions;

export const selectTodoSchedule = (state) => state.todoSchedule.schedule;

export default todoScheduleSlice.reducer;

