import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    delegate: [],
};

export const todoDelegateSlice = createSlice({
    name: "todoDelegate",
    initialState,
    reducers: {
        addDelegate: (state, action) => {
            state.delegate.push(action.payload);
        },
        remove: (state) => {

        },
        edit: (state, action) => {

        },
    },
});

export const { addDelegate, remove, edit } = todoDelegateSlice.actions;

export const selectTodoDelegate = (state) => state.todoDelegate.delegate;

export default todoDelegateSlice.reducer;

