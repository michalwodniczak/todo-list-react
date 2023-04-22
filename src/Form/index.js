import { useState } from "react";
import "./style.css";
const Form = ({ addNewTask }) => {
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