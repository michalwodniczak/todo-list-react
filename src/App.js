import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Form } from "./Form";
import { Tasks } from "./Tasks";
import { Section } from "./Section";
import { Buttons } from "./Buttons";
import { Header } from "./Header";
import { Container } from "./Container";
import { useTasks } from "./useTasks";

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

function App() {
  const [hideDone, setHideDone] = useState(false);
  const { tasks, addNewTask, toggleTaskDone, removeTasks, setAllDone } = useTasks();

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

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
              <Tasks
                tasks={tasks}
                hideDone={hideDone}
                removeTasks={removeTasks}
                toggleTaskDone={toggleTaskDone}
              />}
            extraBody={
              <Buttons
                tasks={tasks}
                hideDone={hideDone}
                toggleHideDone={toggleHideDone}
                setAllDone={setAllDone}
              />}
          />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
