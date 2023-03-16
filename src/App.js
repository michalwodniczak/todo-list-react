import { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Section from "./Section";
import Buttons from "./Buttons";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "przejść na reacta", done: false },
    { id: 2, content: "zjeść pierogi", done: true }
  ])

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTasks = (id) => {
    setTasks(task => task.filter(task => task.id !== id));
  };

  return (
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
            <Tasks
              tasks={tasks}
              hideDone={hideDone}
              removeTasks={removeTasks}
            />}
          extraBody={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
            />}
        />
      </main>
    </Container>
  );
}

export default App;
