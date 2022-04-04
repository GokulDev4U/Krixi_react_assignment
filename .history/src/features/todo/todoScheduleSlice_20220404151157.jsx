import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    schedule: [],
};

export const todoScheduleSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addSchedule: (state, action) => {
            state.schedule.push(action.payload);
        },
        remove: (state) => {
            // state.value -= 1;
        },
        edit: (state, action) => {
            // state.value += action.payload;
        },
    },
});

export const { addSchedule, remove, edit } = todoScheduleSlice.actions;

export const selectTodoSchedule = (state) => state.todo.schedule;

export default todoScheduleSlice.reducer;

