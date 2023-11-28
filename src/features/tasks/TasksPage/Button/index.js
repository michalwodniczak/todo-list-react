import { useDispatch, useSelector } from "react-redux";
import { StyledButton } from "./styled";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";

export const Button = () => {
    const dispatch = useDispatch();
    const areLoading = useSelector(selectLoading)

    return (
        <StyledButton onClick={() => dispatch(fetchExampleTasks())} disabled={areLoading ? true : false}>
            {areLoading === true ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </StyledButton>
    )
};