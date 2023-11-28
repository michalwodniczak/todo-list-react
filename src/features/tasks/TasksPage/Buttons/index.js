import { useSelector, useDispatch } from "react-redux";
import { Wrapper } from "./styled";
import { toggleHideDone, setAllDone, selectHideDone, selectAreTasksEmpty, selectIsEveryTaskDone} from "../../tasksSlice";
import { StyledButton } from "../Button/styled";



export const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const areTaskEmpty = useSelector(selectAreTasksEmpty);
    const everyTaskDone = useSelector(selectIsEveryTaskDone);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            {!areTaskEmpty && (
                <>
                    <StyledButton
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </StyledButton>
                    <StyledButton
                        onClick={() => dispatch(setAllDone())}
                        disabled={everyTaskDone}
                    >
                        Ukończ wszystkie
                    </StyledButton>
                </>
            )}
        </Wrapper>
    )
}