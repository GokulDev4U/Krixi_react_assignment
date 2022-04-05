import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    delegate: [],
    id: uuidv4(),
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

