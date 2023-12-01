import { useParams } from "react-router-dom";
import { Container } from "../../../common/Container";
import { Header } from "../../../common/Header";
import { Section } from "../../../common/Section";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { Wrapper } from "./styled";


function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header
                title="Szczegóły zadania"
            />
            <main>
                <Section
                    title={task ? task.content : "Nie znaleziono zadania :("}
                    body={
                        !!task && (
                            <Wrapper>
                                <>
                                    <strong>Ukonczono</strong>: {task.done ? "Tak" : "Nie"}
                                </>
                            </Wrapper>
                        )}
                />
            </main>
        </Container>
    )
};

export default TaskPage;