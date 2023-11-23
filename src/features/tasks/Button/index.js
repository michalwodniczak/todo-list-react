import { useDispatch } from "react-redux";
import { StyledButton } from "./styled";
import { fetchExampleTasks } from "../tasksSlice";

export const Button = () => {
    const dispatch = useDispatch();

    return (
        <StyledButton onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadania
        </StyledButton>
    )
}