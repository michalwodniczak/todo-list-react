import { useSelector, useDispatch } from "react-redux";
import { Button, Wrapper } from "./styled";
import { toggleHideDone, setAllDone, selectHideDone, selectAreTasksEmpty, selectIsEveryTaskDone } from "../tasksSlice";


export const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const areTaskEmpty = useSelector(selectAreTasksEmpty);
    const everyTaskDone = useSelector(selectIsEveryTaskDone);
    const dispatch = useDispatch();



    return (
        <Wrapper>
            {!areTaskEmpty && (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={everyTaskDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Wrapper>
    )
}