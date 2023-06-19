import { useState, useEffect } from "react"

const getInitialTask = () => {
    const localStorageTask = localStorage.getItem("tasks");
    if (localStorageTask === null) {
        return null;
    }
    return JSON.parse(localStorage.getItem("tasks"));
}

export const useTasks = () => {
    const [tasks, setTasks] = useState(getInitialTask);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const removeTasks = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks((tasks) => tasks.map((task) => task.id === id
            ? { ...task, done: !task.done }
            : task
        ));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })));
    };

    const addNewTask = (newTaskContent) => {
        setTasks(tasks => [
            ...tasks,
            {
                content: newTaskContent,
                done: false,
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            },
        ]
        )
    };

    return {
        tasks,
        removeTasks,
        toggleTaskDone,
        setAllDone,
        addNewTask,
    };


};