import { useState } from "react";
import { FormBody, Input, Button } from "./styled";
export const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("")

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
                autofocus
                name="task"
                required
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>
                Dodaj zadanie
            </Button>
        </FormBody>
    );
};
