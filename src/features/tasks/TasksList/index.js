import { useSelector, useDispatch } from "react-redux";
import { selectTaskByQuery, toggleTaskDone, removeTask, selectHideDone } from "../tasksSlice.js";
import { List, Item, Content, Button, StyledLink } from "./styled.js";
import { useQueryParamteres } from "../queryParameters.js";
import searchQueryParamName  from "../../searchQueryParamName.js";

export const TasksList = () => {

    const query = useQueryParamteres(searchQueryParamName);

    const tasks = useSelector(state => selectTaskByQuery(state, query));
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
                        <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
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
};
