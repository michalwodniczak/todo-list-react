import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { Form } from "./Form";
import { TasksList } from "./TasksList";
import { Section } from "../../common/Section";
import { Buttons } from "./Buttons";
import { Header } from "../../common/Header";
import { Container } from "../../common/Container";
import { useTasks } from "../../useTasks";
import { selectTasks } from "./tasksSlice";

export const theme = {
  color: {
    white: "#fff",
    gallery: "#eee",
    teal: "#008080",
    bondiBlue: "##00b3b3",
    gray: "#808080",
    japaneseLaurel: "#008000",
    green: "#00b300",
    red: "#ff0000",
    sunsetOrange: "#ff5452",
  },
  breakPoint: {
    mobile: 768,
  }
}

function Tasks() {
  const { tasks } = useSelector(selectTasks);
  const { addNewTask, toggleTaskDone, removeTasks, setAllDone } = useTasks();



  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header
          title="List zadań"
        />
        <main>
          <Section
            title="Dodaj nowe zadanie"
            body={<Form addNewTask={addNewTask} />}
          />
          <Section
            title="Lista zadań"
            body={
              <TasksList
                removeTasks={removeTasks}
                toggleTaskDone={toggleTaskDone}
              />}
            extraBody={
              <Buttons
                setAllDone={setAllDone}
              />}
          />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default Tasks;
