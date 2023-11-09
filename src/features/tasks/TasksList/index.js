import { useSelector, useDispatch } from "react-redux";
import { selectTasks,toggleTaskDone } from "../tasksSlice.js";
import { List, Item, Content, Button } from "./styled.js";


export const TasksList = ({ removeTasks, }) => {
    const { tasks, hideDone, } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        onClick={() => dispatch(toggleTaskDone(task.id))}
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
