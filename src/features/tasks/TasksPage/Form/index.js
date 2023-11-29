import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { FormBody, Button } from "./styled";
import { addTask } from "../../tasksSlice";
import { Input } from "../../../../common/Input/input";

export const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("")
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (newTaskContent.trim() === "") {
            return null;
        }

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
