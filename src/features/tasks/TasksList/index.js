import { selectTasks } from "../tasksSlice.js";
import { List, Item, Content, Button } from "./styled.js";
import { useSelector } from "react-redux";

export const TasksList = ({ removeTasks, toggleTaskDone }) => {
    const {tasks,hideDone} = useSelector(selectTasks);
    
    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        onClick={() => toggleTaskDone(task.id)}
                    >
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content
                        done={task.done}
                    >
                        {task.content}
                    </Content>
                    <Button
                        remove
                        onClick={() => removeTasks(task.id)}>
                        🗑️
                    </Button>
                </Item>
            ))}
        </List>
    )
}
