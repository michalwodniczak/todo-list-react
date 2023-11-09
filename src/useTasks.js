import { useState, useEffect } from "react";

const getInitialTask = () => JSON.parse(localStorage.getItem("tasks")) || [];

export const useTasks = () => {
    const [tasks, setTasks] = useState(getInitialTask);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const removeTasks = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

   const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })));
    };

    return {
        removeTasks,
        setAllDone,
    };
};