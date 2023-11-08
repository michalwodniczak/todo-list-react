import { useState, useRef } from "react";
import { FormBody, Input, Button } from "./styled";
export const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("")
    const inputRef = useRef(null);
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.length === 0) {
            return null
        };
        addNewTask(newTaskContent.trim());
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
