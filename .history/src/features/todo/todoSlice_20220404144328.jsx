import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
    value1: [],
    value2: [],
    value3: [],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload);
        },
        addSchedule: (state, action) => {
            state.value1.push(action.payload);
        },
        addDelegate: (state, action) => {
            state.value2.push(action.payload);
        },
        addDontDo: (state, action) => {
            state.value3.push(action.payload);
        },
        remove: (state) => {
            // state.value -= 1;
        },
        edit: (state, action) => {
            // state.value += action.payload;
        },
    },
});

export const { add, addDelegate, addSchedule, addDontDo, remove, edit } = todoSlice.actions;

export const selectTodo = (state) => state.todo.value;
export const selectTodo1 = (state) => state.todo.value1;
export const selectTodo2 = (state) => state.todo.value2;
export const selectTodo3 = (state) => state.todo.value3;

export default todoSlice.reducer;
