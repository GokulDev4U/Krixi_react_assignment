import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    dontDo: [],
    id: uuidv4(),
};

export const todoDontDoSlice = createSlice({
    name: "todoDontDo",
    initialState,
    reducers: {
        addDontDo: (state, action) => {
            state.dontDo.push(action.payload);
        },
        removeDontDo: (state, action) => {
            state.doFirst.filter(item => item.id !== action.payload);
        },
    },
});

export const { addDontDo, removeDontDo, edit } = todoDontDoSlice.actions;

export const selectTodoDontDo = (state) => state.todoDontDo.dontDo;

export default todoDontDoSlice.reducer;

