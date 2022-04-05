import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    doFirst: [],
    id: uuidv4(),
    // schedule: [],
    // delegate: [],
    // dontDo: [],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addDoFirst: (state, action) => {
            state.doFirst.push(action.payload);
        },

        removeDoFirst: (state, action) => {
            state.doFirst.filter(item => item.id !== action.payload);
        },

    },
});

export const { addDoFirst, addDelegate, addSchedule, addDontDo, remove, edit } = todoSlice.actions;

export const selectTodoDoFirst = (state) => state.todo.doFirst;
// export const selectTodoSchedule = (state) => state.todo.schedule;
// export const selectTodoDelegate = (state) => state.todo.delegate;
// export const selectTodoDontDo = (state) => state.todo.dontDo;

export default todoSlice.reducer;
