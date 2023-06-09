import "./style.css";
import { List } from "./styled.js";

const Tasks = ({ tasks, hideDone, removeTasks, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <li key={task.id}
                className={`tasks__listItem ${task.done && hideDone ? "tasks__listItem--hide" : ""}`}
            >
                <button
                    className="tasks__button"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </button>
                <span className={`${task.done ? "tasks__content" : ""}`}>
                    {task.content}
                </span>
                <button
                    className="tasks__button tasks__button--remove"
                    onClick={() => removeTasks(task.id)}>
                    🗑️
                </button>
            </li>
        ))}
    </List>
)

export default Tasks