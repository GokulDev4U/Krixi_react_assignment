import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    delegate: [],
};

export const todoDelegateSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addDelegate: (state, action) => {
            state.delegate.push(action.payload);
        },
        remove: (state) => {
            // state.value -= 1;
        },
        edit: (state, action) => {
            // state.value += action.payload;
        },
    },
});

export const { addDelegate, remove, edit } = todoDelegateSlice.actions;

export const selectTodoDelegate = (state) => state.todo.delegate;

export default todoDelegateSlice.reducer;

