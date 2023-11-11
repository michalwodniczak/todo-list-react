import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from "../tasksSlice.js";
import { List, Item, Content, Button } from "./styled.js";


export const TasksList = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
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
                        onClick={() => dispatch(removeTask(task.id))}>
                        🗑️
                    </Button>
                </Item>
            ))}
        </List>
    )
}
