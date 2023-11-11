import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: tasks => {
            tasks.hideDone = !tasks.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1)
        },
        setAllDone: ({ tasks }) => {
            tasks.forEach((task) => {
                task.done = true
            });
        }
    },
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone } = taskSlice.actions;
export const selectTasks = state => state.tasks;
export default taskSlice.reducer;
