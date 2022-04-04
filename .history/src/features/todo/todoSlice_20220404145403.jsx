import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dofirst: [],
    value1: [],
    value2: [],
    value3: [],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addDoFirst: (state, action) => {
            state.dofirst.push(action.payload);
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

export const { addDoFirst, addDelegate, addSchedule, addDontDo, remove, edit } = todoSlice.actions;

export const selectTodoDoFirst = (state) => state.todo.dofirst;
export const selectTodoSchedule = (state) => state.todo.value1;
export const selectTodoDelegate = (state) => state.todo.value2;
export const selectTodoDontDo = (state) => state.todo.value3;

export default todoSlice.reducer;
