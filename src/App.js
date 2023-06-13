import { useState, useEffect } from "react";
import { Form } from "./Form";
import { Tasks } from "./Tasks";
import { Section } from "./Section";
import { Buttons } from "./Buttons";
import { Header } from "./Header";
import { Container } from "./Container";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]
  );
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTasks = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) => tasks.map((task) => task.id === id
      ? { ...task, done: !task.done }
      : task
    ));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]
    )
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
