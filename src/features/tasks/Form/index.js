import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { FormBody, Input, Button } from "./styled";
import { addTask } from "../tasksSlice";

export const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("")
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.length === 0) {
            return null
        };

        dispatch(addTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
        }));
        
        setNewTaskContent("");
    };

    return (
        <FormBody
            onSubmit={onFormSubmit}
        >
            <Input
                ref={inputRef}
                name="task"
                required
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button
                onClick={() => inputRef.current.focus()}
            >
                Dodaj zadanie
            </Button>
        </FormBody>
    );
};
