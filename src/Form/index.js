import { useState } from "react";
import "./style.css";
const Form = ({ addNewTask }) => {
    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    const [newTaskContent, setNewTaskContent] = useState("")

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}
        >
            <input
                className="form__input"
                autofocus
                name="task"
                required
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button
                className="form__button">
                Dodaj zadanie
            </button>
        </form>
    )
}



export default Form