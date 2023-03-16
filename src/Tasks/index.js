import "./style.css";

const Tasks = ({ tasks, hideDone, removeTasks, toggleTaskDone }) => (
    <ul className="tasks__list">
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
    </ul >
)

export default Tasks