import { ThemeProvider } from "styled-components";
import { Form } from "./Form";
import { TasksList } from "./TasksList";
import { Section } from "../../common/Section";
import { Buttons } from "./Buttons";
import { Header } from "../../common/Header";
import { Container } from "../../common/Container";
import { useTasks } from "../../useTasks";


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
  
  const { removeTasks, setAllDone } = useTasks();



  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header
          title="List zadań"
        />
        <main>
          <Section
            title="Dodaj nowe zadanie"
            body={<Form />}
          />
          <Section
            title="Lista zadań"
            body={
              <TasksList
                removeTasks={removeTasks}
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
