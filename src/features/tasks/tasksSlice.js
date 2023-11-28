import { createSlice } from "@reduxjs/toolkit";
import { getTaskFromLocaleStorage } from "./taskLocalStorage";

const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTaskFromLocaleStorage(),
        hideDone: false,
        loading: false
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
        },
        fetchExampleTasks: () => { },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
        setLoading: (state, { payload: loading }) => {
            state.loading = loading;
        }
    },
});

const selectTaskState = state => state.tasks;

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone, fetchExampleTasks, setTasks, setLoading } = taskSlice.actions;
export const selectTasks = state => selectTaskState(state).tasks;
export const selectHideDone = state => selectTaskState(state).hideDone;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectLoading = state => selectTaskState(state).loading;
export const getTaskById = (state,taskId) => selectTasks(state).find(({id}) => id === taskId);

export default taskSlice.reducer;
