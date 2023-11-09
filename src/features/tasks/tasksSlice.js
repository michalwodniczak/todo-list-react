import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload)
            tasks[index].done = !tasks[index].done
        },
    },
});

export const { addTask, toggleHideDone, toggleTaskDone } = taskSlice.actions;
export const selectTasks = state => state.tasks;
export default taskSlice.reducer;