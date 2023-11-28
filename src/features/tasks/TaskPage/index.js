import { useParams } from "react-router-dom";
import { Container } from "../../../common/Container";
import { Header } from "../../../common/Header";
import { Section } from "../../../common/Section";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";


function TaskPage() {
    const { id } = useParams();
    const tasks = useSelector(state => getTaskById(state, id));
    return (
        <Container>
            <Header
                title="Szczegóły zadania"
            />
            <main>
                <Section
                    title={tasks ? tasks.content : "nie znaleziono zadania"}
                    body={
                        <>
                            <strong>Ukonczono</strong> {tasks.done ? "Tak" : "Nie"}
                        </>
                    }
                />
            </main>
        </Container>
    )
};

export default TaskPage;