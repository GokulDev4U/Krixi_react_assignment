import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    schedule: [],
};

export const todoScheduleSlice = createSlice({
    name: "todoSchedule",
    initialState,
    reducers: {
        addSchedule: (state, action) => {
            state.schedule.push(action.payload);
        },
        remove: (state) => {

        },
        edit: (state, action) => {

        },
    },
});

export const { addSchedule, remove, edit } = todoScheduleSlice.actions;

export const selectTodoSchedule = (state) => state.todoSchedule.schedule;

export default todoScheduleSlice.reducer;

