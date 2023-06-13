import { Button, Wrapper } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
    if (tasks.lenght === 0) {
        return null;
    }

    return (
        <Wrapper>
            <Button
                onClick={toggleHideDone}
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </Wrapper>
    )
}
export default Buttons;