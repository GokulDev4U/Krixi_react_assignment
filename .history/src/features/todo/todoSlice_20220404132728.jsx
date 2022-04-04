import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,

    reducers: {
        add: (state, action) => {
            state.value.push(action.payload);
        },
        delete: (state) => {
            // state.value -= 1;
        },
        edit: (state, action) => {
            // state.value += action.payload;
        },
    },
});

export const { add, delete, edit } = todoSlice.actions;

export const selectTodo = (state) => state.todo.value;

export default todoSlice.reducer;
