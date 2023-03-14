import "./style.css";

const Tasks = ({tasks,hideDoneTasks}) => (
    <ul className="tasks__list">
        {tasks.map(task => (
            <li key={task.id}
                className={`tasks__listItem ${task.done && hideDoneTasks ? "tasks__listItem--hide" : ""}`}
            >
                <button className="tasks__button">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`${task.done ? "tasks__content" : ""}`}>
                    {task.content}
                </span>
                <button className="tasks__button tasks__button--remove">
                    🗑️
                </button>
            </li>
        ))}
    </ul >
)

export default Tasks