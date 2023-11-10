import { useSelector, useDispatch } from "react-redux";
import { Button, Wrapper } from "./styled";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";


export const Buttons = () => {

    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    if (tasks.lenght === 0) {
        return null;
    }

    return (
        <Wrapper>
            <Button
                onClick={() => dispatch(toggleHideDone())}
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                onClick = {() => dispatch(setAllDone())}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </Wrapper>
    )
}