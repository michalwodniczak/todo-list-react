import { useState } from "react";
import { Form } from "./Form";
import { Tasks } from "./Tasks";
import { Section } from "./Section";
import { Buttons } from "./Buttons";
import { Header } from "./Header";
import { Container } from "./Container";
import { useTasks } from "./useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const { tasks, addNewTask, toggleTaskDone, removeTasks, setAllDone } = useTasks();
  
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
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
  );
}

export default App;
