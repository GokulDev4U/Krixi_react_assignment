import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        add: (state) => {
            state.value += 1;
        },
        delete: (state) => {
            state.value -= 1;
        },
        edit: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = todoSlice.actions;

export const selectTodo = (state) => state.todo.value;

export default todoSlice.reducer;
