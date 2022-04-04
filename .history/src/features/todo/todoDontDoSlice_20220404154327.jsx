import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dontDo: [],
};

export const todoDontDoSlice = createSlice({
    name: "todoDontDo",
    initialState,
    reducers: {
        addDontDo: (state, action) => {
            state.dontDo.push(action.payload);
        },
        remove: (state) => {

        },
        edit: (state, action) => {

        },
    },
});

export const { addDontDo, remove, edit } = todoDontDoSlice.actions;

export const selectTodoDontDo = (state) => state.todoDontDo.dontDo;

export default todoDontDoSlice.reducer;

