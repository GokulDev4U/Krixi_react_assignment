import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dontDo: [],
};

export const todoScheduleSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addDontDo: (state, action) => {
            state.dontDo.push(action.payload);
        },
        remove: (state) => {
            // state.value -= 1;
        },
        edit: (state, action) => {
            // state.value += action.payload;
        },
    },
});

export const { addDontDo, remove, edit } = todoScheduleSlice.actions;

export const selectTodoDontDo = (state) => state.todo.dontDo;

export default todoScheduleSlice.reducer;

