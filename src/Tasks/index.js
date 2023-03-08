import "./style.css";

const Tasks = (props) => (
    <ul className="tasks__list">
        {props.tasks.map(task => (
            <li key={task.id}
                className={`tasks__listItem ${task.done && props.hideDoneTasks ? "tasks__listItem--hide" : ""}`}
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